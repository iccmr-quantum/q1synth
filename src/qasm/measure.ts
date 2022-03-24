import * as Tone from 'tone'
import { shortestAngle, tossWeightedCoin, mapToRange } from '../functions/utils';
import { setIsMeasuring } from '../qasm/qasmSlice';
import type { AppDispatch } from '../app/store';
import { synth, SynthArgs } from '../sound';
import { 
    toggleIsFullScreen, 
    incrementXAxis, 
    incrementYAxis, 
    incrementZAxis, 
    setData,
    setButtonsDisabled, 
    setButtonsActive, 
    setButtonActive,
    DataState, 
    Mode
} from '../data/dataSlice';
import { send, receive } from './socket';

export interface MeasureArgs {
    x: number 
    y: number 
    z: number 
    time: number
    mode: Mode
    synthParams: SynthArgs
    isFullScreen: boolean
    storedDestination: number
    useQasm: boolean
    mintData: DataState 
    dispatch: AppDispatch
}

const mint = (destination: number, data: DataState) => {
    console.log(JSON.stringify(
        {
            ...data, 
            mode: 'presentation',
            destination: destination === 180 ? 1 : 0
        }))
}

function measureWithQasm(z: number) {
    return new Promise((resolve, reject) => {
        // Show loading for at least 2 seconds
        setTimeout(() => {
            receive(resolve, reject)
            send(z)
        }, 2000)
        // Time out if it takes more than 10 seconds
        setTimeout(() => reject('Couldn\'t talk to quantum computer.'), 10000) // TODO: is 10 seconds long enough?
    });
}

function measure(z: number, useQasm: boolean): 0 | 1 | Promise<number> {
    const weight = z > 180 
        ? 360 - z
        : z

    return useQasm
        ? measureWithQasm(z)
            .then(response => {
                console.log(response)
                return 0 // TODO: parse response
            })
            .catch(error => {
                console.log(error + ' Calculating measurement locally.')
                return tossWeightedCoin(mapToRange(weight, 0, 180, 0, 1)) ? 0 : 1
            })
        : tossWeightedCoin(mapToRange(weight, 0, 180, 0, 1)) ? 0 : 1
}

export async function handleMeasure(args: MeasureArgs) {
    const { x, y, z, time, mode, synthParams, isFullScreen, storedDestination, useQasm, mintData, dispatch } = args
    
    Tone.Transport.cancel(0)
    dispatch(setButtonsDisabled())
    !isFullScreen && dispatch(toggleIsFullScreen());

    dispatch(setIsMeasuring(true))

    const destination = mode === 'presentation' 
        ? storedDestination
        : await measure(z, useQasm) * 180

    dispatch(setIsMeasuring(false))
    
    mint(destination, mintData)

    const xAngle = shortestAngle(x, 0)
    const yAngle = shortestAngle(y, 0)
    const zAngle = shortestAngle(z, destination)
    const xStep = (xAngle / (time * 64)) * (x < 0 ? +1 : -1) / 360
    const yStep = (yAngle / (time * 64)) * (y < 0 ? +1 : -1) / 360
    const zStep = (zAngle / (time * 64)) * (z < destination ? +1 : -1) / 360

    Tone.Transport.scheduleOnce(() => synth.play(synthParams, time, mode !== 'presentation'), 0)
    
    Tone.Transport.scheduleRepeat(() => {
        dispatch(incrementXAxis(xStep))
        dispatch(incrementYAxis(yStep))
        dispatch(incrementZAxis(zStep))
    }, "128n", 0);

    Tone.Transport.start().stop(`+${time}`);
    Tone.Transport.once('stop', () => {
        setTimeout(() => {
            dispatch(setButtonsActive()) && dispatch(setButtonActive(null));
            !isFullScreen && mode !== 'presentation' && dispatch(toggleIsFullScreen());
            window.qusynth && dispatch(setData(window.qusynth))
        }, 1000); 
    })
}
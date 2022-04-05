import * as Tone from 'tone'
import { shortestAngle, tossWeightedCoin, mapToRange } from '../functions/utils';
import { setIsMeasuring, clearQasmResponses } from '../qasm/qasmSlice';
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
    backend: string
    dispatch: AppDispatch
}

const mint = (destination: number, data: DataState) => {
    // console.log(JSON.stringify(
    //     {
    //         ...data, 
    //         mode: 'presentation',
    //         destination: destination === 180 ? 1 : 0
    //     }))
}

function measureWithQasm(
    x: number, 
    y: number, 
    z: number, 
    backend: string
) {
    return new Promise((resolve, reject) => {
        receive(resolve, reject)
        send(x, y, z, backend)
        // Time out if it takes more than 10 seconds
        // setTimeout(() => reject('Couldn\'t talk to quantum computer.'), 200000) // TODO: how long should this be?
    });
}

function measure(
    x: number, 
    y: number, 
    z: number, 
    useQasm: boolean, 
    backend: string
) : any {
    const weight = z > 180 
        ? 360 - z
        : z

    return useQasm
        ? measureWithQasm(z, y, x, backend)
            .then(response => response)
            .catch(error => {
                console.log(error + ' Calculating measurement locally.')
                return tossWeightedCoin(mapToRange(weight, 0, 180, 0, 1)) ? 0 : 1
            })
        : tossWeightedCoin(mapToRange(weight, 0, 180, 0, 1)) ? 0 : 1
}

export async function handleMeasure(args: MeasureArgs) {
    const { x, y, z, time, mode, synthParams, isFullScreen, storedDestination, useQasm, mintData, backend, dispatch } = args
    
    Tone.Transport.cancel(0)
    dispatch(setButtonsDisabled())
    !isFullScreen && dispatch(toggleIsFullScreen());

    dispatch(setIsMeasuring(true))
    dispatch(clearQasmResponses())

    const destination = mode === 'presentation' 
        ? storedDestination
        : await measure(x, y, z, useQasm, backend) * 180

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
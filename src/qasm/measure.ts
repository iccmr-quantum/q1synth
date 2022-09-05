import * as Tone from 'tone'
import { tossWeightedCoin, mapToRange } from '../functions/utils';
import { setIsMeasuring, clearQasmResponses, setIsCollapsing } from '../qasm/qasmSlice';
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

import { incrementQubitBy } from '../synthesis/synthesisSlice';
import { send, receive } from './socket';

export interface MeasureArgs {
    x: number 
    y: number 
    z: number 
    time: number
    mode: Mode
    isFullScreen: boolean
    storedDestination: number
    useQasm: boolean
    mintData: DataState
    backend: string
    shouldRecord: boolean
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
        window.addEventListener('keydown', e => e.key === 'Escape' && reject())
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
    const weight = Math.abs(x)

    return useQasm
        ? measureWithQasm(x, y, z, backend)
            .then(response => response)
            .catch(error => {
                console.log(error + ' Calculating measurement locally.')
                return tossWeightedCoin(mapToRange(weight, 0, 180, 0, 1)) ? 0 : 1
            })
        : tossWeightedCoin(mapToRange(weight, 0, 180, 0, 1)) ? 0 : 1
}

export async function handleMeasure(args: MeasureArgs) {
    const { x, y, z, time, mode, isFullScreen, storedDestination, useQasm, mintData, backend, shouldRecord, dispatch } = args
    
    Tone.Transport.cancel(0)
    dispatch(setButtonsDisabled())
    !isFullScreen && dispatch(toggleIsFullScreen());

    dispatch(setIsMeasuring(true))
    dispatch(clearQasmResponses())

    const xDestination = mode === 'presentation' 
        ? storedDestination
        : await measure(x, y, z, useQasm, backend) * (x < 0 ? -180 : 180)

    const yDestination = (y < 0 ? 0 : -0)
    const zDestination = (z < 0 ? 0 : -0)

    dispatch(setIsMeasuring(false))
    dispatch(setIsCollapsing(true))
    
    mint(xDestination, mintData)

    const xStep = ((xDestination - x) / (time * 64))/180
    const yStep = ((yDestination - y) / (time * 64))/180
    const zStep = ((zDestination - z) / (time * 64))/180

    // Tone.Transport.scheduleOnce(() => synth.play(synthParams, time, mode !== 'presentation' && shouldRecord), 0)
    
    Tone.Transport.scheduleRepeat(() => {
        dispatch(incrementQubitBy({x: xStep, y: yStep, z: zStep}))
    }, "128n", 0);

    Tone.Transport.start().stop(`+${time}`);
    // Tone.Transport.once('stop', () => {
    //     setTimeout(() => {
    //         dispatch(setButtonsActive()) && dispatch(setButtonActive(null));
    //         dispatch(setIsCollapsing(false))
    //         !isFullScreen && mode !== 'presentation' && dispatch(toggleIsFullScreen());
    //         window.qusynth && dispatch(setData(window.qusynth))
    //     }, 1000); 
    // })
}
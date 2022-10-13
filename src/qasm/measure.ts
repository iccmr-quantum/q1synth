import * as Tone from 'tone'
import { tossWeightedCoin, mapToRange } from '../functions/utils';
import { setIsMeasuring, clearQasmResponses, setIsCollapsing } from '../qasm/qasmSlice';
import type { AppDispatch } from '../app/store';
import { 
    toggleIsFullScreen, 
    setData,
    DataState, 
    Mode
} from '../data/dataSlice';

import { incrementQubitBy, stop, play, setDisabled, collapseSynth } from '../synthesis/synthesisSlice';
import { sendQasm, receiveQasm } from './socket';

export interface MeasureArgs {
    x: number 
    y: number 
    z: number 
    dur: number
    mode: Mode
    isFullScreen: boolean
    destination: number | null
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
        receiveQasm(resolve, reject)
        sendQasm(x, y, z, backend)
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
    const { x, y, z, dur, mode, isFullScreen, destination, storedDestination, useQasm, mintData, backend, shouldRecord, dispatch } = args
    
    !isFullScreen && dispatch(toggleIsFullScreen());

    dispatch(setIsMeasuring(true))
    dispatch(clearQasmResponses())

    const xDestination = destination !== null
        ? destination * 180
        : mode === 'presentation' 
            ? storedDestination
            : await measure(x, y, z, useQasm, backend) * (x < 0 ? -180 : 180)

    const yDestination = (y < 0 ? 0 : -0)
    const zDestination = (z < 0 ? 0 : -0)
    const destinationCoordinates = {x: xDestination/180, y: yDestination, z: zDestination}

    dispatch(setIsMeasuring(false))
    dispatch(setIsCollapsing(true))
    
    mint(xDestination, mintData)
    
    const xStep = ((xDestination - x) / (dur * 64))/180
    const yStep = ((yDestination - y) / (dur * 64))/180
    const zStep = ((zDestination - z) / (dur * 64))/180
    
    const loopID = Tone.Transport.scheduleRepeat(time => {
        Tone.Draw.schedule(() => {
            dispatch(incrementQubitBy({x: xStep, y: yStep, z: zStep}))
        }, time);
    }, "128n");

    dispatch(collapseSynth(destinationCoordinates));
    Tone.Transport.start('+0.01').stop(`+${dur + 0.01}`);
    
    Tone.Transport.once('stop', () => {
        Tone.Transport.clear(loopID)
        setTimeout(() => {
            dispatch(stop())
            dispatch(setDisabled(false));
            dispatch(setIsCollapsing(false))
            !isFullScreen && mode !== 'presentation' && dispatch(toggleIsFullScreen());
            window.qusynth && dispatch(setData(window.qusynth))
        }, 1000); 
    })
}
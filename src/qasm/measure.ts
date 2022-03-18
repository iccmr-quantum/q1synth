import * as Tone from 'tone'
import { shortestAngle, tossWeightedCoin, mapToRange } from '../functions/utils';
import { DataState, Mode } from '../data/dataSlice';
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
    
} from '../data/dataSlice';

const mint = (destination: number, data: DataState) => {
    console.log(JSON.stringify(
        {
            ...data, 
            mode: 'presentation',
            destination: destination === 180 ? 1 : 0
        }))
}

function measure(z: number, useQasm: boolean) : 0 | 1 {
    const weight = z > 180 
        ? 360 - z
        : z

    return useQasm // this is where we need to inject the await function???
        ? 0
        : tossWeightedCoin(mapToRange(weight, 0, 180, 0, 1)) ? 1 : 0
}

export function handleMeasure(
    x: number, 
    y: number, 
    z: number, 
    time: number,
    mode: Mode,
    synthParams: SynthArgs,
    isFullScreen: boolean,
    storedDestination: number,
    useQasm: boolean,
    mintData: DataState, 
    dispatch: AppDispatch
) {
    Tone.Transport.cancel(0)
    dispatch(setButtonsDisabled())
    !isFullScreen && dispatch(toggleIsFullScreen());

    const destination = mode === 'presentation' 
        ? storedDestination
        : measure(z, useQasm) * 180
    
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
            isFullScreen && mode !== 'presentation' && dispatch(toggleIsFullScreen());
            window.qusynth && dispatch(setData(window.qusynth))
        }, 1000); 
    })
}
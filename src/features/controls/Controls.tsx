import React, { MouseEvent } from 'react'
import * as Tone from 'tone'
import { Sliders } from '../sliders/Sliders';
import { Qubit } from '../qubit/Qubit';
import { Button } from '../buttons/Button';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { 
    toggleIsFullScreen, 
    getButtonActive, 
    getDisabledStatus, 
    incrementXAxis, 
    incrementYAxis, 
    incrementZAxis, 
    getQubit,
    getSynthParams, 
    getTime, 
    getIsFullScreen, 
    getMintData, 
    getMode,
    setData,
    setButtonsDisabled, 
    setButtonsActive, 
    setButtonActive,
    getDestination,
} from '../../data/dataSlice';

import styles from './Controls.module.css';
import { synth } from '../sound';
import { shortestAngle, tossWeightedCoin, mapToRange } from '../../functions/utils';
import { DataState } from '../../data/dataSlice';

const mint = (destination: number, data: DataState) => {
    console.log(JSON.stringify(
        {
            ...data, 
            mode: 'presentation',
            destination: destination === 180 ? 1 : 0
        }))
}

export function Controls() {
    const dispatch = useAppDispatch()
    const buttonActive = useAppSelector(getButtonActive);
    const synthParams = useAppSelector(getSynthParams)
    const qubit = useAppSelector(getQubit)
    const disabled = useAppSelector(getDisabledStatus)
    const time = useAppSelector(getTime)
    const isFullScreen = useAppSelector(getIsFullScreen)
    const mintData = useAppSelector(getMintData)
    const mode = useAppSelector(getMode)
    const storedDestination = useAppSelector(getDestination)

    function handleMeasure() {
        // TODO: this should all go in an async reducer action - rather than it sitting in a template...
        Tone.Transport.cancel(0)
        dispatch(setButtonsDisabled())
        !isFullScreen && dispatch(toggleIsFullScreen());

        const x = qubit.x.value * 360
        const y = qubit.y.value * 360
        const z = qubit.z.value * 360

        const weight = z > 180 
            ? 360 - z
            : z

        const destination = mode === 'presentation'
            ? storedDestination
            : tossWeightedCoin(mapToRange(weight, 0, 180, 0, 1)) 
                ? z > 180
                    ? 360 
                    : 0 
                    : 180
        
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

    function handleButtonOnClick(e: MouseEvent<HTMLButtonElement>, button: string) {
        button === 'rotate' 
            && (buttonActive !== 'rotate' 
                ? dispatch(setButtonActive('rotate'))
                : dispatch(setButtonActive(null)))

        button === 'measure' 
            && (buttonActive !== 'measure'
                ? dispatch(setButtonActive('measure')) && handleMeasure() 
                : dispatch(setButtonActive(null)) && Tone.Transport.cancel() && synth.off())
    }

    return (
        <>
            <div className={styles.container}>
                {mode === 'advanced' && !isFullScreen &&
                    <section className={`${styles.sliders} sliders`}>
                        <Sliders group="leftA"/>
                    </section>
                }
                <section 
                    className={`${styles.qubit} ${isFullScreen && styles.qubitFW}`}
                >
                    <Qubit size={isFullScreen ? 500 : 350}/>
                </section>
                {mode === 'advanced' && !isFullScreen &&
                    <section className={`${styles.sliders} sliders`}>
                        <Sliders group="rightA"/>
                    </section>
                }
            </div>
            <div className={styles.buttons}>
                {mode !== 'presentation' && <Button 
                    name="rotate" 
                    activeName="stop"
                    onClick={handleButtonOnClick}
                    isActive={buttonActive === 'rotate'}
                    disabled={disabled}
                />}
                <Button 
                    name="measure"
                    activeName="stop"
                    onClick={handleButtonOnClick}
                    isActive={buttonActive === 'measure'}
                    disabled={disabled}
                />
            </div>
        </>
    )
}
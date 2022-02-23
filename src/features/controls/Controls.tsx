import React, { MouseEvent } from 'react'
import * as Tone from 'tone'
import { Sliders } from '../sliders/Sliders';
import { Qubit } from '../qubit/Qubit';
import { Button } from '../buttons/Button';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { setButtonValue, getButtonValue, getDisabledStatus, setButtonsDisabled, setButtonsActive, incrementXAxis, incrementYAxis, incrementZAxis, getQubit } from '../../data/dataSlice';
import { getSynthParams, getTime, getIsFullScreen } from '../../data/dataSlice';
import styles from './Controls.module.css';
import { synth } from '../sound';
import { shortestAngle, tossWeightedCoin, mapToRange } from '../../functions/utils';

export function Controls() {
    const dispatch = useAppDispatch()
    const measure = useAppSelector(getButtonValue('measure'));
    const rotate = useAppSelector(getButtonValue('rotate'));
    const synthParams = useAppSelector(getSynthParams)
    const qubit = useAppSelector(getQubit)
    const disabled = useAppSelector(getDisabledStatus)
    const time = useAppSelector(getTime)
    const isFullScreen = useAppSelector(getIsFullScreen)

    function handleMeasure() {
        // TODO: this should all go in an async reducer action - rather than it sitting in a template...
        Tone.Transport.cancel(0)
        dispatch(setButtonsDisabled())

        const x = qubit.x.value * 360
        const y = qubit.y.value * 360
        const z = qubit.z.value * 360

        const weight = z > 180 
            ? 360 - z
            : z

        const destination = tossWeightedCoin(mapToRange(weight, 0, 180, 0, 1)) 
            ? z > 180
                ? 360 
                : 0 
                : 180
        
        const xAngle = shortestAngle(x, 0)
        const yAngle = shortestAngle(y, 0)
        const zAngle = shortestAngle(z, destination)
        const xStep = (xAngle / (time * 64)) * (x < 0 ? +1 : -1) / 360
        const yStep = (yAngle / (time * 64)) * (y < 0 ? +1 : -1) / 360
        const zStep = (zAngle / (time * 64)) * (z < destination ? +1 : -1) / 360

        Tone.Transport.scheduleOnce(() => synth.play(synthParams, time), 0)
        
        Tone.Transport.scheduleRepeat(() => {
            dispatch(incrementXAxis(xStep))
            dispatch(incrementYAxis(yStep))
            dispatch(incrementZAxis(zStep))
        }, "128n", 0);

        Tone.Transport.start().stop(`+${time}`);
        Tone.Transport.once('stop', () => dispatch(setButtonsActive()) && dispatch(setButtonValue({button: 'measure'})))
    }

    function handleButtonOnClick(e: MouseEvent<HTMLButtonElement>, button: string) {
        (button === 'measure' || button === 'rotate') && dispatch(setButtonValue({button}))
        
        button === 'rotate' && !rotate && synth.on(synthParams);
        button === 'rotate' && rotate && synth.off(synthParams);
        button === 'measure' && !measure && handleMeasure()
        button === 'measure' && measure && Tone.Transport.cancel() && synth.off(synthParams)
    }

    return (
        <>
            <div className={styles.container}>
                {!isFullScreen &&
                    <section className={`${styles.sliders} sliders`}>
                        <Sliders group="leftA"/>
                    </section>
                }
                <section 
                    className={`${styles.qubit} ${isFullScreen && styles.qubitFW}`}
                >
                    <Qubit size={isFullScreen ? 500 : 350}/>
                </section>
                {!isFullScreen &&
                    <section className={`${styles.sliders} sliders`}>
                        <Sliders group="rightA"/>
                    </section>
                }
            </div>
            <div className={styles.buttons}>
                <Button 
                    name="rotate" 
                    activeName="stop"
                    onClick={handleButtonOnClick}
                    isActive={rotate}
                    disabled={disabled}
                />
                <Button 
                    name="measure" 
                    activeName="stop"
                    onClick={handleButtonOnClick}
                    isActive={measure}
                    disabled={disabled}
                />
            </div>
        </>
    )
}
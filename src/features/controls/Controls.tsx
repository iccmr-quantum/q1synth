import React, { MouseEvent } from 'react'
import * as Tone from 'tone'
import { Sliders } from '../sliders/Sliders';
import { Qubit } from '../qubit/Qubit';
import { Button } from '../buttons/Button';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { setButtonValue, getButtonValue, getDisabledStatus, setButtonsDisabled, setButtonsActive } from '../../data/dataSlice';
import { getSynthParams, incrementDialValue , getDialValue, randomiseSliderGroup, getTime } from '../../data/dataSlice';
import styles from './Controls.module.css';
import { synth } from '../sound';
import { shortestAngle, tossWeightedCoin, mapToRange } from '../../functions/utils';

export function Controls() {
    const dispatch = useAppDispatch()
    const measure = useAppSelector(getButtonValue('measure'));
    const rotate = useAppSelector(getButtonValue('rotate'));
    const synthParams = useAppSelector(getSynthParams)
    const dial = useAppSelector(getDialValue)
    const disabled = useAppSelector(getDisabledStatus)
    const time = useAppSelector(getTime)

    function handleMeasure() {
        // TODO: this should all go in an async reducer action - rather than it sitting in a template...
        Tone.Transport.cancel(0)
        dispatch(setButtonsDisabled())
        dispatch(randomiseSliderGroup('leftB'))
        dispatch(randomiseSliderGroup('rightB'))

        const weight = dial > 180 
            ? 360 - dial
            : dial

        const destination = tossWeightedCoin(mapToRange(weight, 0, 180, 0, 1)) 
            ? dial > 180
                ? 360 
                : 0 
                : 180
        
        const angle = shortestAngle(dial, destination)
        const step = (angle / (time * 64)) * (dial < destination ? +1 : -1)

        Tone.Transport.scheduleOnce(() => synth.play(synthParams, time), 0)
        
        Tone.Transport.scheduleRepeat(() => {
            dispatch(incrementDialValue(step))
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
                <section className={`${styles.sliders} sliders`}>
                    <Sliders group="leftA"/>
                </section>
                <section className={`${styles.qubit} qubit`}>
                    <Qubit />
                </section>
                <section className={`${styles.sliders} sliders`}>
                    <Sliders group="rightA" invert={true}/>
                </section>
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
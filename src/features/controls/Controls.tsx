import React, { MouseEvent } from 'react'
import * as Tone from 'tone'
import { Dial } from '../dial/Dial';
import { Sliders } from '../sliders/Sliders';
import { Button } from '../buttons/Button';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { setButtonValue, getButtonValue } from '../buttons/buttonsSlice';
import { getSynthParams, incrementDialValue , getDialValue } from '../sound/synthSlice';
import styles from './Controls.module.css';
import { synth } from '../sound';
import { shortestAngle, tossWeightedCoin, mapToRange } from '../../functions/utils';

export function Controls() {
    const dispatch = useAppDispatch()
    const play = useAppSelector(getButtonValue('play'));
    const start = useAppSelector(getButtonValue('start'));
    const synthParams = useAppSelector(getSynthParams)
    const dial = useAppSelector(getDialValue)

    function handlePlay() {
        Tone.Transport.cancel(0)

        const weight = dial > 180 
            ? 360 - dial
            : dial

        const destination = tossWeightedCoin(mapToRange(weight, 0, 180, 0, 1)) 
            ? dial > 180
                ? 360 
                : 0 
                : 180
        
        const angle = shortestAngle(dial, destination)
        const step = (angle / 128) * (dial < destination ? +1 : -1)

        Tone.Transport.scheduleOnce(() => synth.play(synthParams, "1m"), 0)
        
        Tone.Transport.scheduleRepeat(() => {
            dispatch(incrementDialValue(step))
        }, "128n", 0);

        Tone.Transport.start().stop("+1m");
    }

    function handleButtonOnClick(e: MouseEvent<HTMLButtonElement>, button: 'play' | 'start' | 'download') {
        dispatch(setButtonValue({button}))
        
        button === 'start' && !start && synth.on(synthParams);
        button === 'start' && start && synth.off(synthParams);
        button === 'play' && handlePlay()
    }

    return (
        <>
            <div className={styles.container}>
                <section className={styles.sliders}>
                    <Sliders group="left"/>
                </section>
                <section className={styles.dial}>
                    <Dial />
                </section>
                <section className={styles.sliders}>
                    <Sliders group="right" invert={true}/>
                </section>
            </div>
            <div className={styles.buttons}>
                <Button 
                    name="start" 
                    activeName="stop"
                    onClick={handleButtonOnClick}
                    isActive={start}
                />
                <Button 
                    name="play" 
                    activeName="stop"
                    onClick={handleButtonOnClick}
                    isActive={play}
                />
            </div>
        </>
    )
}
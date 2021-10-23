import React, { MouseEvent } from 'react'
import * as Tone from 'tone'
import { Dial } from '../dial/Dial';
import { Sliders } from '../sliders/Sliders';
import { Button } from '../buttons/Button';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { setButtonValue, getButtonValue } from '../buttons/buttonsSlice';
import { getSynthParams, incrementDialValue } from '../sound/synthSlice';
import styles from './Controls.module.css';
import { synth } from '../sound';

export function Controls() {
    const dispatch = useAppDispatch()
    const play = useAppSelector(getButtonValue('play'));
    const start = useAppSelector(getButtonValue('start'));
    const synthParams = useAppSelector(getSynthParams)

    function handlePlay() {
        const step = 180 / 128
        Tone.Transport.scheduleOnce(time => {
            synth.play(synthParams, "1m");
        }, 0)
        new Tone.Loop((time) => {
            dispatch(incrementDialValue(step))
        }, "128n").start(0);
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
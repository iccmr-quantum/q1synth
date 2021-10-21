import React, { MouseEvent } from 'react'
import { Dial } from '../dial/Dial';
import { Sliders } from '../sliders/Sliders';
import { Button } from '../buttons/Button';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { setButtonValue, getButtonValue } from '../buttons/buttonsSlice';
import { startSynth, stopSynth } from '../sound/soundSlice';
import styles from './Controls.module.css';

export function Controls() {
    const dispatch = useAppDispatch()
    const play = useAppSelector(getButtonValue('play'));
    const start = useAppSelector(getButtonValue('start'));

    function handleButtonOnClick(e: MouseEvent<HTMLButtonElement>, button: 'play' | 'start' | 'download') {
        dispatch(setButtonValue({button}))
        button === 'start' && !start && dispatch(startSynth());
        button === 'start' && start && dispatch(stopSynth());
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
                    onClick={handleButtonOnClick}
                    isActive={play}
                />
            </div>
        </>
    )
}
import React, { useState, MouseEvent } from 'react'
import { Dial } from '../dial/Dial';
import { Sliders } from '../sliders/Sliders';
import { Button } from '../button/Button';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { setButtonValue, getButtonValue } from '../button/buttonSlice';
import styles from './Controls.module.css';

export function Controls() {
    const dispatch = useAppDispatch()
    const play = useAppSelector(getButtonValue('play'));
    const start = useAppSelector(getButtonValue('start'));
    console.log(play, start)
    function handleButtonOnClick(e: MouseEvent<HTMLButtonElement>, button: 'play' | 'start') {
        dispatch(setButtonValue({button, isActive: true}))
    }
    return (
        <>
            <div className={styles.container}>
                <section className={styles.sliders}>
                    <Sliders side="left"/>
                </section>
                <section className={styles.dial}>
                    <Dial />
                </section>
                <section className={styles.sliders}>
                    <Sliders side="right" invert={true}/>
                </section>
            </div>
            <div className={styles.buttons}>
                <Button 
                    name="start" 
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
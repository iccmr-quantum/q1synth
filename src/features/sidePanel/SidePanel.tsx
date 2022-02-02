import React, { MouseEvent, useState} from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { Sliders } from '../sliders/Sliders';
import { Button } from '../buttons/Button';
import { Presets } from '../presets/Presets';
import { getTimes, setTime, getDisabledStatus } from '../../data/dataSlice';
import styles from './SidePanel.module.css'

export function SidePanel() {
    const dispatch = useAppDispatch()
    const times = useAppSelector(getTimes)
    const disabled = useAppSelector(getDisabledStatus)

    const [show, setShow] = useState(true)

    function handleButtonOnClick(e: MouseEvent<HTMLButtonElement>, button: string) {
        (button === 'one' || button === 'five' || button === 'ten') && dispatch(setTime({button}))
    }

    function handleHideShow() {
        setShow(!show)
    }

    return (
        <aside className={`${styles.sidePanel} ${show ? styles.sidePanelOpen : styles.sidePanelClosed}`}>
            <div className={styles.sidePanel__content}>
                <span 
                    className={styles.toggle}
                    onClick={() => handleHideShow()}
                >Config</span>
                <Presets />
                <div className={styles.buttonsContainer}></div>
                <h2>Duration of Measurement</h2>
                <div className={styles.buttons}>
                    {Object.entries(times).map(([time, isActive]) => (
                        <Button 
                            name={time} 
                            isActive={isActive}
                            disabled={disabled}  
                            onClick={handleButtonOnClick}
                            key={time}
                        />
                    ))}
                </div>
                <Sliders group="env" title="Envelope"/>
                <Sliders group="modEnv" title="Modulation Envelope"/>
            </div>
        </aside>
    );
}

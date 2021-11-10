import React, { MouseEvent} from 'react';
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

    function handleButtonOnClick(e: MouseEvent<HTMLButtonElement>, button: string) {
        (button === 'one' || button === 'five' || button === 'ten') && dispatch(setTime({button}))
    }

    return (
        <div className="side-panel">
            <Presets />
            <div className={styles.buttons}>
                <h2>Duration of Measurement</h2>
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
    );
}

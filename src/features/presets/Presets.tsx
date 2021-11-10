import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getPresetNumber, getDisabledStatus, setPreset } from '../../data/dataSlice';
import styles from './Presets.module.css'

export function Presets() {
    const dispatch = useAppDispatch()
    const activePreset = useAppSelector(getPresetNumber)
    const disabled = useAppSelector(getDisabledStatus)
    return (
        <div className={styles.container}>
            <h2>Presets</h2>
            <div className={styles.buttons}>
                {Array.from(Array(8)).map((_, i) => (
                    <button 
                        className={`
                            ${styles.button} 
                            ${activePreset === i ? styles.active : ''}
                        `}
                        onClick={() => dispatch(setPreset(i))}
                        disabled={disabled}
                        key={i}
                    >
                        { i + 1 }
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Presets;

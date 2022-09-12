import React, { useEffect, MouseEvent } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getPresetNumber, getDisabledStatus, setPreset } from '../../data/dataSlice';
import { getState, loadState } from '../../synthesis/synthesisSlice';
import styles from './Presets.module.css'

export function Presets() {
    const dispatch = useAppDispatch()
    const activePreset = useAppSelector(getPresetNumber)
    const disabled = useAppSelector(getDisabledStatus)
    const appState = useAppSelector(getState)

    useEffect(() => {
        const stored = localStorage.getItem('q1synth')
        !stored && localStorage.setItem('q1synth', JSON.stringify({}))
    }, []);

    const handleSave = (e: MouseEvent<HTMLButtonElement>, i: number) => {
        const stored = localStorage.getItem('q1synth') || "{}"
        const presets = JSON.parse(stored)
        localStorage.setItem('q1synth', JSON.stringify({...presets, [i]: appState}))
        dispatch(setPreset(i))
    }

    const handleLoad = (e: MouseEvent<HTMLButtonElement>, i: number) => {
        const stored = localStorage.getItem('q1synth') || "{}"
        const presets = JSON.parse(stored)
        presets[i] && dispatch(setPreset(i));
        presets[i] && dispatch(loadState(presets[i]));
    }

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
                        onClick={e => e.shiftKey ? handleSave(e,i) : handleLoad(e,i)}
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

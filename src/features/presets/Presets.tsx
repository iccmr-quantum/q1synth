import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getState, loadState, getDisabled } from '../../synthesis/synthesisSlice';
import { getMidiStatus, getActiveMidiInput } from '../../midi/midiSlice'
import { WebMidi } from 'webmidi';
import { midiMap } from '../../midi/midiMap'

import styles from './Presets.module.css'

export function Presets() {
    const dispatch = useAppDispatch()
    const [activePreset, setActivePreset] = useState(0)
    const disabled = useAppSelector(getDisabled)
    const appState = useAppSelector(getState)
    const midiIsEnabled = useAppSelector(getMidiStatus)
    const midiInput = useAppSelector(getActiveMidiInput)
    const [stored, setStored] = useState({})

    useEffect(() => {
        const local = localStorage.getItem('q1synth') || '{}'
        local === '{}' && localStorage.setItem('q1synth', JSON.stringify({}));
        setStored(JSON.parse(local))
    }, []);

    const handleSave = (i: number) => {
        const newStored = {...stored, [i]: appState}
        setStored(newStored)
        localStorage.setItem('q1synth', JSON.stringify(newStored))
        setActivePreset(i)
    }

    const handleLoad = (i: number) => {
        const local = localStorage.getItem('q1synth') || "{}"
        const presets = JSON.parse(local)
        presets[i] && setActivePreset(i);
        presets[i] && dispatch(loadState(presets[i]));
    }

    useEffect(() => {
        midiIsEnabled 
            && midiInput
            && WebMidi.getInputById(midiInput).addListener('controlchange', e => {
                const { value } = e
                const { number } = e.controller
                const map = midiMap(number)
                const {id} = map
                if(!map || !value ) return
                
                (number >= 46 && number <= 53) && handleLoad(+id)
            });
    }, [midiIsEnabled, midiInput])

    return (
        <div className={styles.container}>
            <h2>Presets</h2>
            <div className={styles.buttons}>
                {Array.from(Array(8)).map((_, i) => (
                    <button 
                        // @ts-expect-error
                        className={`${styles.button} ${activePreset === i ? styles.active : ''} ${stored[i] && styles.exists}`}
                        onClick={e => e.shiftKey ? handleSave(i) : handleLoad(i)}
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

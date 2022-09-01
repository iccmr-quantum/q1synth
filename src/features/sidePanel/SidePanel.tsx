import React, { MouseEvent, useState, useEffect} from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { Sliders } from '../sliders/Sliders';
import { Select } from '../select/Select';
import { Input } from '../input/Input';
import { Button } from '../buttons/Button';
import { Presets } from '../presets/Presets';
import { getMode, getTimes, setTime, getDisabledStatus, getShouldRecord, setShouldRecord } from '../../data/dataSlice';
import { SynthType, synthTypes, setSynth, setCustomParams } from '../../synthesis/synthesisSlice';
import { synthesisParams } from '../../synthesis/params';
import { getMidiInputs, setActiveInput } from '../../midi/midiSlice';
import styles from './SidePanel.module.css'
import { getUseQasm, getBackend, setBackend } from '../../qasm/qasmSlice';

export function SidePanel() {
    const dispatch = useAppDispatch()
    const times = useAppSelector(getTimes)
    const mode = useAppSelector(getMode)
    const disabled = useAppSelector(getDisabledStatus)
    const midiInputs = useAppSelector(getMidiInputs)
    const useQasm = useAppSelector(getUseQasm)
    const qasmBackend = useAppSelector(getBackend)
    const [active, setActive] = useState(0)
    const [show, setShow] = useState(false)
    // const [canScroll, setCanScroll] = useState(true)
    const shouldRecord = useAppSelector(getShouldRecord)

    useEffect(() => {
        const handleKeyDownRun = (e: KeyboardEvent) => e.code === 'Escape' && setShow(false) && e.preventDefault();
        const handleResize = () => setShow(false)

        window.addEventListener('keydown', handleKeyDownRun)
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('keydown', handleKeyDownRun) 
            window.removeEventListener('resize', handleResize)
        }
    }, []);

    function handleButtonOnClick(e: MouseEvent<HTMLButtonElement>, button: string) {
        (button === 'one' || button === 'five' || button === 'ten') && dispatch(setTime({button}))
    }

    function handleHideShow(tab: number) {
        (show && tab !== active) || setShow(!show)
        setActive(tab)
    }

    function handleMidiSelect(e: React.ChangeEvent<HTMLSelectElement>) {
        dispatch(setActiveInput(e.target.value))
    }

    function handleBackendInput(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch(setBackend(e.target.value))
    }

    function handleChangeSynth(e: React.ChangeEvent<HTMLSelectElement>) {
        const type = e.target.value as SynthType
        dispatch(setSynth(type))
        dispatch(setCustomParams(synthesisParams[type]))
    }

    return (
        <aside className={`${styles.sidePanel} ${show ? styles.sidePanelOpen : styles.sidePanelClosed}`}>
            <div className={`${styles.sidePanel__content} ${active === 0 && styles.contentActive}`}>
                <span 
                    className={`${styles.toggle} ${styles.toggle0} ${active === 0 && styles.toggleActive}`}
                    onClick={() => handleHideShow(0)}
                >Info</span>
                <div>
                    <h2>Q1Synth</h2>
                    <p>Interdisciplinary Centre For Computer Music Research (ICCMR).</p>
                    <p>Rotate and measure the qubit to quantum-design a sound.</p>
                    <p>MouseY for angle of inclination (θ).</p>
                    <p>MouseX for azimuth (φ).</p>
                    <p>shift + mouseX for sphere phase.</p>
                    <p>f for fullscreen.</p>
                    <p>Shift and click on presets to save current app state.</p>
                </div>
            </div>
            {mode === 'advanced' && 
                <div className={`${styles.sidePanel__content} ${active === 1 && styles.contentActive}`}>
                    <span 
                        className={`${styles.toggle} ${styles.toggle1} ${active === 1 && styles.toggleActive}`}
                        onClick={() => handleHideShow(1)}
                    >Config</span>
                    <Select 
                        title="Instrument" 
                        options={synthTypes.map((type) => ({id: type, label: type}))} 
                        onChange={handleChangeSynth}
                    />                    
                    <Sliders group="env" title="Envelope"/>
                    <Sliders group="modEnv" title="Modulation Envelope"/>                    
                    <Presets />
                    <div className={styles.measureContainer}>
                        <h2>Duration of Measurement</h2> 
                        <label className={styles.checkboxLabel}>
                            Record?
                            <input 
                                className={styles.checkbox} 
                                type="checkbox"
                                checked={shouldRecord}
                                onChange={() => dispatch(setShouldRecord(!shouldRecord))}
                            />
                        </label>
                    </div>
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

                    <Select 
                        title="MIDI" 
                        options={midiInputs.map(({id, name}) => ({id, label: name}))} 
                        onChange={handleMidiSelect}
                    />
                    { useQasm && <Input
                        title="Qasm Backend" 
                        value={qasmBackend}
                        onChange={handleBackendInput}
                    /> }
                </div>
            }   
        </aside>
    );
}

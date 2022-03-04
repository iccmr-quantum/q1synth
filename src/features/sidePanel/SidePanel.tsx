import React, { MouseEvent, useState} from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { Sliders } from '../sliders/Sliders';
import { Select } from '../select/Select';
import { Button } from '../buttons/Button';
import { Presets } from '../presets/Presets';
import { getTimes, setTime, getDisabledStatus } from '../../data/dataSlice';
import { getMidiInputs, setActiveInput } from '../../midi/midiSlice';
import styles from './SidePanel.module.css'

export function SidePanel() {
    const dispatch = useAppDispatch()
    const times = useAppSelector(getTimes)
    const disabled = useAppSelector(getDisabledStatus)
    const midiInputs = useAppSelector(getMidiInputs)
    const [active, setActive] = useState(0)
    const [show, setShow] = useState(false)

    function handleButtonOnClick(e: MouseEvent<HTMLButtonElement>, button: string) {
        (button === 'one' || button === 'five' || button === 'ten') && dispatch(setTime({button}))
    }

    function handleHideShow(tab: number) {
        
        setActive(tab)
        setShow(!show)
    }

    function handleMidiSelect(e: React.ChangeEvent<HTMLSelectElement>) {
        dispatch(setActiveInput(e.target.value))
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
                    <p>f for fullscreen. shift + mouseY to rotate Y.</p>
                </div>
            </div>
            <div className={`${styles.sidePanel__content} ${active === 1 && styles.contentActive}`}>
                <span 
                    className={`${styles.toggle} ${styles.toggle1} ${active === 1 && styles.toggleActive}`}
                    onClick={() => handleHideShow(1)}
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
                <Select 
                    title="MIDI" 
                    options={midiInputs.map(({id, name}) => ({id, label: name}))} 
                    onChange={handleMidiSelect}
                />
            </div>
        </aside>
    );
}

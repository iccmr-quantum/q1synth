// TODO: Measure and MIDI

import React, { MouseEvent, useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { Button } from '../buttons/Button';
import { 
    // randomise,
    // setPreset,
    // setControl,
    getButtonActive, 
    getDisabledStatus, 
    // getQubit,
    // getSynthParams, 
    // getTime, 
    getIsFullScreen, 
    // getMintData, 
    getMode,
    setButtonsDisabled, 
    setButtonActive,
    // getDestination,
    // setTime,
    // getShouldRecord
} from '../../data/dataSlice';

import styles from './Controller.module.css';

export function Controller() {
    const dispatch = useAppDispatch()
    const mode = useAppSelector(getMode)
    const disabled = useAppSelector(getDisabledStatus)
    const buttonActive = useAppSelector(getButtonActive);
    const isFullScreen = useAppSelector(getIsFullScreen)

    const [buttonRef, setButtonRef] = useState<HTMLButtonElement | null>()

    function handleButtonOnClick(e: MouseEvent<HTMLButtonElement>, button: string) {
        button === 'rotate' 
            && (buttonActive !== 'rotate' 
                ? dispatch(setButtonActive('rotate'))
                : dispatch(setButtonActive(null)))

        button === 'measure' 
            && dispatch(setButtonsDisabled())
            && dispatch(setButtonActive('measure')) 
            // && handleMeasure(measureArgs);
    }
    
    return (
        <>
        
            <div className={styles.container}>
                {mode === 'advanced' && !isFullScreen &&
                    <section className={`${styles.sliders} sliders`}>
                        {/* <Sliders group="leftA"/> */}
                    </section>
                }
                {/* <section 
                    className={`${styles.qubit} ${isFullScreen && styles.qubitFW}`}
                >
                    <Qubit size={isFullScreen ? 500 : 350}/>
                </section> */}
                {mode === 'advanced' && !isFullScreen &&
                    <section className={`${styles.sliders} sliders`}>
                        {/* <Sliders group="rightA"/> */}
                    </section>
                }
            </div>
            
            <div className={styles.buttons}>
                {mode !== 'presentation' && <Button 
                    name="play" 
                    activeName="stop"
                    onClick={handleButtonOnClick}
                    isActive={buttonActive === 'rotate'}
                    disabled={disabled}
                />}
                <Button 
                    name="measure"
                    activeName="stop"
                    onClick={handleButtonOnClick}
                    isActive={buttonActive === 'measure'}
                    disabled={disabled}
                    setButtonRef={setButtonRef}
                />
            </div>
        
        </>
    )
}
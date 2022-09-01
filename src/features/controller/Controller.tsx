// TODO: Measure and MIDI
// TODO: Prune Controls, Sliders, etc.

import React, { MouseEvent, useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { Button } from '../buttons/Button';
import { Qubit } from '../qubit/Qubit';
import { SliderGroup } from '../sliderGroup/SliderGroup';
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

import { getXParams, getYParams, getZParams, setParam } from '../../synthesis/synthesisSlice';
import synthesis from '../../synthesis/synthesis';

import styles from './Controller.module.css';

export function Controller() {
    const dispatch = useAppDispatch()
    const mode = useAppSelector(getMode)
    const disabled = useAppSelector(getDisabledStatus)
    const buttonActive = useAppSelector(getButtonActive);
    const isFullScreen = useAppSelector(getIsFullScreen)
    const xParams = useAppSelector(getXParams)
    const yParams = useAppSelector(getYParams)
    const zParams = useAppSelector(getZParams)

    const [buttonRef, setButtonRef] = useState<HTMLButtonElement | null>()
    const [isPlaying, setIsPlaying] = useState(false)

    function handleParamChange(key: string, type: string, valuesI: number, value: number) {
        dispatch(setParam({key, type, valuesI, value}))
    }

    function togglePlay() {
        setIsPlaying(!isPlaying)
        isPlaying ? synthesis.stop() : synthesis.play()
    }
    
    return (
        <>
        
            <div className={styles.container}>
                {mode === 'advanced' && !isFullScreen &&
                    <section className={`${styles.sliders} sliders`}>
                        <SliderGroup id="xParams" label="|0⟩" params={xParams} onChange={handleParamChange} />
                        <SliderGroup id="yParams" label="|+⟩" params={yParams} onChange={handleParamChange} />
                        <SliderGroup id="zParams" label="λ" params={zParams} onChange={handleParamChange} />
                    </section>
                }
                
                <section 
                    className={`${styles.qubit} ${isFullScreen && styles.qubitFW}`}
                >
                    <Qubit size={isFullScreen ? 500 : 350}/>
                </section>
                
                {mode === 'advanced' && !isFullScreen &&
                    <section className={`${styles.sliders} sliders`}>
                        <SliderGroup id="xParams" label="|1⟩" params={xParams} valuesI={1} onChange={handleParamChange} />
                        <SliderGroup id="yParams" label="|-⟩" params={yParams} valuesI={1} onChange={handleParamChange} />
                        <SliderGroup id="zParams" label="λ" params={zParams} valuesI={1} onChange={handleParamChange} />
                    </section>
                }
            </div>
            
            <div className={styles.buttons}>
                {mode !== 'presentation' && <Button 
                    name="play" 
                    activeName="stop"
                    onClick={togglePlay}
                    isActive={isPlaying}
                    disabled={disabled}
                />}
                <Button 
                    name="measure"
                    activeName="stop"
                    onClick={() => null}
                    isActive={buttonActive === 'measure'}
                    disabled={disabled}
                    setButtonRef={setButtonRef}
                />
            </div>
        
        </>
    )
}
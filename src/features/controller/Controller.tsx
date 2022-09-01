// TODO: Measure and MIDI

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

import { getXParams, getYParams, getZParams, setXParam, setYParam, setZParam } from '../../synthesis/synthesisSlice';

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

    function handleParamChange(groupId: string, paramType: string, valuesI: number, value: number) {
        switch (groupId) {
            case 'x':
                dispatch(setXParam({type: paramType, valuesI, value}))
                break;
            case 'y':
                dispatch(setYParam({type: paramType, valuesI, value}))
                break;
            case 'z':
                dispatch(setZParam({type: paramType, valuesI, value}))
                break;
        }
    }
    
    return (
        <>
        
            <div className={styles.container}>
                {mode === 'advanced' && !isFullScreen &&
                    <section className={`${styles.sliders} sliders`}>
                        <SliderGroup id="x" label="|0⟩" params={xParams} onChange={handleParamChange} />
                        <SliderGroup id="y" label="|+⟩" params={yParams} onChange={handleParamChange} />
                        <SliderGroup id="z" label="λ" params={zParams} onChange={handleParamChange} />
                    </section>
                }
                <section 
                    className={`${styles.qubit} ${isFullScreen && styles.qubitFW}`}
                >
                    <Qubit size={isFullScreen ? 500 : 350}/>
                </section>
                {mode === 'advanced' && !isFullScreen &&
                    <section className={`${styles.sliders} sliders`}>
                        <SliderGroup id="x" label="|1⟩" params={xParams} valuesI={1} onChange={handleParamChange} />
                        <SliderGroup id="y" label="|-⟩" params={yParams} valuesI={1} onChange={handleParamChange} />
                        <SliderGroup id="z" label="λ" params={zParams} valuesI={1} onChange={handleParamChange} />
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
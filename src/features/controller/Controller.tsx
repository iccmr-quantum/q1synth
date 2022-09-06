// TODO: Measure and MIDI
// TODO: Prune Controls, Sliders, etc.

import { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { Button } from '../buttons/Button';
import { Qubit } from '../qubit/Qubit';
import { SliderGroup } from '../sliderGroup/SliderGroup';
import { 
    // setPreset,
    // setControl,
    getButtonActive, 
    getDisabledStatus, 
    getIsFullScreen, 
    getMintData, 
    getMode,
    getTime,
    getDestination,
    getShouldRecord,
} from '../../data/dataSlice';

import { getXParams, getYParams, getZParams, setParam, play, stop, getQubit } from '../../synthesis/synthesisSlice';
import { getBackend, getIsCollapsing, getQasmStatus } from '../../qasm/qasmSlice';

import styles from './Controller.module.css';
import { handleMeasure, MeasureArgs } from '../../qasm/measure';

export function Controller() {
    const dispatch = useAppDispatch()
    const mode = useAppSelector(getMode)
    const disabled = useAppSelector(getDisabledStatus)
    const isFullScreen = useAppSelector(getIsFullScreen)
    const xParams = useAppSelector(getXParams)
    const yParams = useAppSelector(getYParams)
    const zParams = useAppSelector(getZParams)
    const dur = useAppSelector(getTime)
    const storedDestination = useAppSelector(getDestination)
    const useQasm = useAppSelector(getQasmStatus)
    const backend = useAppSelector(getBackend)
    const mintData = useAppSelector(getMintData)
    const shouldRecord = useAppSelector(getShouldRecord)
    const { x, y, z } = useAppSelector(getQubit)  // this is causing performance issues
    const isCollapsing = useAppSelector(getIsCollapsing)

    const [buttonRef, setButtonRef] = useState<HTMLButtonElement | null>()
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMeasuring, setIsMeasuring] = useState(false)

    function handleParamChange(key: string, type: string, valuesI: number, value: number) {
        dispatch(setParam({key, type, valuesI, value}))
    }

    function togglePlay() {
        setIsPlaying(!isPlaying)
        isPlaying ? dispatch(stop()) : dispatch(play())
    }

    function handleMeasureClick() {
    
        const measureArgs: MeasureArgs = {
            x: x * 180,
            y: y * 180,
            z: z * 180,
            dur,
            mode,
            isFullScreen,
            storedDestination,
            useQasm,
            mintData,
            backend,
            shouldRecord,
            dispatch
        }

        isPlaying && dispatch(stop())
        setIsPlaying(false)

        handleMeasure(measureArgs)
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
                    activeName="measure"
                    onClick={handleMeasureClick}
                    isActive={isCollapsing}
                    disabled={disabled}
                    setButtonRef={setButtonRef}
                />
            </div>
        
        </>
    )
}
import React, { MouseEvent } from 'react'

import * as Tone from 'tone'
import { Sliders } from '../sliders/Sliders';
import { Qubit } from '../qubit/Qubit';
import { Button } from '../buttons/Button';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { 
    toggleIsFullScreen, 
    getButtonActive, 
    getDisabledStatus, 
    incrementXAxis, 
    incrementYAxis, 
    incrementZAxis, 
    getQubit,
    getSynthParams, 
    getTime, 
    getIsFullScreen, 
    getMintData, 
    getMode,
    setData,
    setButtonsDisabled, 
    setButtonsActive, 
    setButtonActive,
    getDestination,
    
} from '../../data/dataSlice';
import { getQasmStatus } from '../../qasm/qasmSlice';
import { handleMeasure } from '../../qasm/measure';

import styles from './Controls.module.css';

export function Controls() {
    const dispatch = useAppDispatch()
    const buttonActive = useAppSelector(getButtonActive);
    const synthParams = useAppSelector(getSynthParams)
    const qubit = useAppSelector(getQubit)
    const disabled = useAppSelector(getDisabledStatus)
    const time = useAppSelector(getTime)
    const isFullScreen = useAppSelector(getIsFullScreen)
    const mintData = useAppSelector(getMintData)
    const mode = useAppSelector(getMode)
    const storedDestination = useAppSelector(getDestination)
    const useQasm = useAppSelector(getQasmStatus)

    function handleButtonOnClick(e: MouseEvent<HTMLButtonElement>, button: string) {
        button === 'rotate' 
            && (buttonActive !== 'rotate' 
                ? dispatch(setButtonActive('rotate'))
                : dispatch(setButtonActive(null)))

        button === 'measure' 
            && dispatch(setButtonsDisabled())
            && dispatch(setButtonActive('measure')) 
            && handleMeasure(
                qubit.x.value * 360,
                qubit.y.value * 360,
                qubit.z.value * 360,
                time,
                mode,
                synthParams,
                isFullScreen,
                storedDestination,
                useQasm,
                mintData,
                dispatch
            );
    }

    return (
        <>
            <div className={styles.container}>
                {mode === 'advanced' && !isFullScreen &&
                    <section className={`${styles.sliders} sliders`}>
                        <Sliders group="leftA"/>
                    </section>
                }
                <section 
                    className={`${styles.qubit} ${isFullScreen && styles.qubitFW}`}
                >
                    <Qubit size={isFullScreen ? 500 : 350}/>
                </section>
                {mode === 'advanced' && !isFullScreen &&
                    <section className={`${styles.sliders} sliders`}>
                        <Sliders group="rightA"/>
                    </section>
                }
            </div>
            <div className={styles.buttons}>
                {mode !== 'presentation' && <Button 
                    name="rotate" 
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
                />
            </div>
        </>
    )
}
import React, { MouseEvent } from 'react'

import { Sliders } from '../sliders/Sliders';
import { Qubit } from '../qubit/Qubit';
import { Button } from '../buttons/Button';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { 
    randomise,
    setPreset,
    setControl,
    getButtonActive, 
    getDisabledStatus, 
    getQubit,
    getSynthParams, 
    getTime, 
    getIsFullScreen, 
    getMintData, 
    getMode,
    setButtonsDisabled, 
    setButtonActive,
    getDestination
} from '../../data/dataSlice';
import { getMidiStatus, getActiveMidiInput } from '../../midi/midiSlice'
import { midiMap } from '../../midi/midiMap'
import { WebMidi } from 'webmidi';
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

    const midiIsEnabled = useAppSelector(getMidiStatus)
    const midiInput = useAppSelector(getActiveMidiInput)
    
    // midi input
    midiIsEnabled 
        && midiInput
        && WebMidi.getInputById(midiInput).addListener('controlchange', e => {
            const { value } = e
            const { number } = e.controller
            const map = midiMap(number)
            if(!map || !value) return

            map.key === 'play' && dispatch(setButtonActive('rotate'));
            map.key === 'stop' && dispatch(setButtonActive(null));
            // map.key === 'measure' && dispatch(setButtonActive('measure'));
            map.key === 'randomise' && dispatch(randomise());
            map.group === 'preset' && dispatch(setPreset(+map.key));
            !['preset', 'action'].includes(map.group) && dispatch(setControl({ group: map.group, key: map.key, value: +value }));
        });

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
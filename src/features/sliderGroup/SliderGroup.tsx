import React, {  } from 'react'
import { Param } from '../../synthesis/synthesisSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getSlidersValue, setControl, getDisabledStatus } from '../../data/dataSlice';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import styles from './SliderGroup.module.css';

interface sliderGroupProps {
    label?: string,
    params: Param[],
    invert?: boolean | undefined
    valuesI?: number
}

export function SliderGroup({label, params, valuesI = 0, invert = false} : sliderGroupProps) {
    const disabled = useAppSelector(getDisabledStatus)
    return (
        <div className={styles.sliders}>
            { label && <h2 className={invert ? styles.textrightA : ''}>{ label }</h2> }
            {params.map(({type, min, max, step, values}, i) => (
                <div key={i} className={styles.container}>
                    <Slider
                        className={styles.slider}
                        min={min} 
                        max={max}
                        onChange={val => console.log('changing')}
                        step={step}
                        disabled={disabled}
                        value={values[valuesI]}
                    />
                    <p className={`
                        ${styles.label} 
                        ${invert ? styles.labelInvert : ''}
                    `}>{ type }</p>
                </div>
            ))}
        </div> 
    )
}
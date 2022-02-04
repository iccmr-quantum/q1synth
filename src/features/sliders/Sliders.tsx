import React, {  } from 'react'
import Slider from 'rc-slider';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getSlidersValue, setData, getDisabledStatus } from '../../data/dataSlice';
import 'rc-slider/assets/index.css';
import styles from './Sliders.module.css';

interface sliderProps {
    group: string,
    title?: string,
    invert?: boolean | undefined
}

export function Sliders({group, title, invert} : sliderProps) {
    const dispatch = useAppDispatch()
    const sliders = useAppSelector(getSlidersValue(group));

    const disabled = useAppSelector(getDisabledStatus)
    
    function handleOnChange(value: number, key: string) {
        dispatch(setData({group, key, value}))
    }

    return (
        <div className={styles.sliders}>
            { title && <h2 className={invert ? styles.textrightA : ''}>{ title }</h2> }
            {Object.values(sliders).map((
                {label, value} : any,
                i: number
            ) => (
                <div className={styles.container} key={i}>
                    <Slider
                        className={styles.slider}
                        min={0} 
                        max={1}
                        onChange={val => handleOnChange(val, Object.keys(sliders)[i])}
                        step={0.01}
                        key={i}
                        disabled={disabled}
                        value={value}
                    />
                    <p className={`
                        ${styles.label} 
                        ${invert ? styles.labelInvert : ''}
                    `}>{ label }</p>
                </div>
            ))}
        </div> 
    );
}   
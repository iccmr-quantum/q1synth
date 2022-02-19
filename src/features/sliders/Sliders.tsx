import React, {  } from 'react'
import Slider from 'rc-slider';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getSlidersValue, setControl, getDisabledStatus } from '../../data/dataSlice';
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
        dispatch(setControl({group, key, value}))
    }

    return (
        <div className={styles.sliders}>
            { title && <h2 className={invert ? styles.textrightA : ''}>{ title }</h2> }
            {Object.values(sliders).map((
                {title, label, value} : any,
                i: number
            ) => (
                <div key={i}>
                    {title && <strong><p>{title}</p></strong>}
                    <div className={styles.container}>
                        <Slider
                            className={styles.slider}
                            min={0} 
                            max={1}
                            onChange={val => handleOnChange(val, Object.keys(sliders)[i])}
                            step={0.01}
                            disabled={disabled}
                            value={value}
                        />
                        <p className={`
                            ${styles.label} 
                            ${invert ? styles.labelInvert : ''}
                        `}>{ label }</p>
                    </div>
                </div>
            ))}
        </div> 
    );
}   
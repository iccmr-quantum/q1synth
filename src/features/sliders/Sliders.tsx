import React, {  } from 'react'
import Slider from 'rc-slider';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { setSliderAndSynthValues, getSlidersValue } from './slidersSlice';
import { getDialValue } from '../dial/dialSlice'
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
    const dial = useAppSelector(getDialValue);

    function handleOnChange(value: number, index: number) {
        dispatch(setSliderAndSynthValues({group, index, value, dial}))
    }

    return (
        <div className={styles.sliders}>
            { title && <h2 className={invert ? styles.textRight : ''}>{ title }</h2> }
            {sliders.map((
                {value, label} : {value: number, label: string},
                i: number
            ) => (
                <div className={styles.container} key={i}>
                    <Slider
                        className={styles.slider}
                        value={value}
                        min={0} 
                        max={1}
                        onChange={(e) => handleOnChange(e, i)}
                        step={0.01}
                        key={i}
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
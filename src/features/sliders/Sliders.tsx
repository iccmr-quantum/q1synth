import React, {  } from 'react'
import Slider from 'rc-slider';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { setSliderValue, getSlidersValue } from './slidersSlice';
import 'rc-slider/assets/index.css';
import styles from './Sliders.module.css';

interface sliderProps {
    side: string,
    invert?: boolean | undefined
}

export function Sliders({side, invert} : sliderProps) {
    const dispatch = useAppDispatch()
    const sliders = useAppSelector(getSlidersValue(side));

    function handleOnChange(value: number, index: number) {
        dispatch(setSliderValue({side, index, value}))
    }

    return (
        <>
            {sliders.map((
                {value, label} : {value: number, label: string}, // TODO: how to import this type?
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
        </> 
    );
}   
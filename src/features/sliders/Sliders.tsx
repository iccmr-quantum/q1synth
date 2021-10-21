import React, {  } from 'react'
import Slider from 'rc-slider';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { setSliderValue, getSlidersValue, getSynthParams } from './slidersSlice';
import { setSynth } from '../sound/soundSlice';
import 'rc-slider/assets/index.css';
import styles from './Sliders.module.css';
import _, { debounce } from 'underscore';

interface sliderProps {
    group: string,
    title?: string,
    invert?: boolean | undefined
}

export function Sliders({group, title, invert} : sliderProps) {
    const dispatch = useAppDispatch()
    const sliders = useAppSelector(getSlidersValue(group));
    const synthParams = useAppSelector(getSynthParams)

    function handleOnChange(value: number, index: number) {
        dispatch(setSliderValue({group, index, value}))
        dispatch(setSynth(synthParams))
    }

    return (
        <div className={styles.sliders}>
            { title && <h2 className={invert ? styles.textRight : ''}>{ title }</h2> }
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
        </div> 
    );
}   
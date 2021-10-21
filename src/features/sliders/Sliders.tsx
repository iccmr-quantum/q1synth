import React, {  } from 'react'
import Slider from 'rc-slider';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { setSliderValue, getSlidersValue, getSynthParams } from './slidersSlice';
import 'rc-slider/assets/index.css';
import styles from './Sliders.module.css';
import { synth } from '../sound';

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
        // synth.set(synthParams)
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
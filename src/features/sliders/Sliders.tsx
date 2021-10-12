import React, {  } from 'react'
import Slider from 'rc-slider';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { setSliderValue, getSlidersValue } from './slidersSlice';
import 'rc-slider/assets/index.css';
// import styles from './Sliders.module.css';

interface sliderProps {
    side: string
}

export function Sliders({side} : sliderProps) {
    const dispatch = useAppDispatch()
    const sliders = useAppSelector(getSlidersValue(side));

    function handleOnChange(value: number, index: number) {
        dispatch(setSliderValue({side, index, value}))
    }

    return (
        <>
            {sliders.map((value: number, i: number) => (
                <Slider
                    value={value}
                    min={0} 
                    max={1}
                    onChange={(e) => handleOnChange(e, i)}
                    step={0.01}
                    key={i}
                />
            ))}
        </> 
    );
}   
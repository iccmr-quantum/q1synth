import React, { useState } from 'react'
import { Knob } from "react-rotary-knob";
import { constrain, mapToRange } from '../../functions/utils';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { setDialValue, getDialValue } from './dialSlice';
import styles from './Dial.module.css';

export function Dial() {
    const [position, setPosition] = useState(0)
    const dispatch = useAppDispatch()
    const value = useAppSelector(getDialValue);

    const handleOnChange = (val: number) : void => {
        const angle = constrain(
            val > 180 ? val - 360 : val, 
            -140, 140
        );
        const value = Math.round(mapToRange(angle, -140, 140, -100, 100))
        
        setPosition(angle < 0 ? 360 + angle : angle)
        dispatch(setDialValue(value))
    }
    return (
        <Knob 
            style={{
                width: '200px',
                height: '200px',
            }}
            min={0}
            max={360}
            value={position}
            unlockDistance={10}
            onChange={handleOnChange} 
        />
    );
}   
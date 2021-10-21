import React, { useState, useEffect } from 'react'
import { Knob } from "react-rotary-knob";
import { constrain, mapToRange } from '../../functions/utils';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { setDialValue, getDialValue } from '../sound/soundSlice';
// import styles from './Dial.module.css';

export function Dial() {
    const [position, setPosition] = useState(0)
    const dispatch = useAppDispatch()
    const value = useAppSelector(getDialValue);
    const minAngle = -180
    const maxAngle = 180

    useEffect(() => {
        const scaled = value > 1 ? 1 
            : value < -1 ? -1 
            : value
        handleSetPosition(mapToRange(scaled, -1, 1, minAngle, maxAngle))
    }, [minAngle, maxAngle, value])
    

    const handleSetPosition = (angle: number) => {
        const value = angle < 0 ? 360 + angle : angle
        setPosition(value)
    }

    const constrainAngle = (val: number) : number => {
        return constrain(
            val > 180 ? val - 360 : val, 
            minAngle, 
            maxAngle
        );
    }

    const handleOnChange = (val: number) : void => {
        const angle = constrainAngle(val)
        const value = mapToRange(angle, minAngle, maxAngle, -1, 1)
        
        handleSetPosition(angle)
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
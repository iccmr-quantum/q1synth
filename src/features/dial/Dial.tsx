import React, { useState, useEffect } from 'react'
import { Knob } from "react-rotary-knob";
import { constrain, mapToRange } from '../../functions/utils';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { setDialValue, getDialValue } from '../sound/soundSlice';
// import styles from './Dial.module.css';

export function Dial() {
    const dispatch = useAppDispatch()
    const value = useAppSelector(getDialValue);

    const handleOnChange = (val: number) : void => {    
        dispatch(setDialValue(val))
    }
    return (
        <Knob 
            style={{
                width: '200px',
                height: '200px',
            }}
            min={0}
            max={360}
            value={value}
            unlockDistance={10}
            onChange={handleOnChange} 
        />
    );
}   
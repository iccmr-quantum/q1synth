import React from 'react'
import { Knob } from "react-rotary-knob";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { setDialValue, getDialValue } from '../sound/synthSlice';

export function Dial() {
    const dispatch = useAppDispatch()
    const value = useAppSelector(getDialValue);

    const handleOnChange = (val: number) : void => {    
        dispatch(setDialValue(val))
    }
    return (
        <>
            <span>1</span>
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
            <span>0</span>
        </>
    );
}   
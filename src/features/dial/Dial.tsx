import React, {  } from 'react'
import { Knob } from "react-rotary-knob";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { setDialValue, getDialValue } from '../../data/dataSlice';

const knobStyles = {
    width: '200px',
    height: '200px'
}

export function Dial() {
    const dispatch = useAppDispatch()
    const value = useAppSelector(getDialValue);

    const handleOnChange = (val: number) : void => {
        dispatch(setDialValue(val))
    }
    return (
        <>
            <span>1</span>
            <svg 
                className="dial-svg"
                style={{
                    transform: `rotateZ(${value}deg)`
                }}
            >
                <circle 
                    cx="100" 
                    cy="100" 
                    r="95" 
                    stroke="#000" 
                    strokeWidth="2"
                    fill="transparent"
                ></circle>
                <circle 
                    className="dial-svg__circle-x"
                    cx="100" 
                    cy="300" 
                    r="95" 
                    stroke="#000" 
                    strokeWidth="2"
                    fill="transparent"
                ></circle>
            </svg>
            <Knob 
                style={knobStyles}
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
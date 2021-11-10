import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { Sliders } from '../sliders/Sliders';
import { Button } from '../buttons/Button';
import { getTimes } from '../../data/dataSlice';
import { getDisabledStatus } from '../../data/dataSlice';

export function SidePanel() {
    const times = useAppSelector(getTimes)
    const disabled = useAppSelector(getDisabledStatus)
    // console.log(times)
    return (
        <div className="side-panel">
            {Object.entries(times).map(([time, isActive]) => (
                <Button 
                    name={time} 
                    isActive={isActive}
                    disabled={disabled}  
                    onClick={() => console.log('hello')}
                    key={time}
                />
            ))}
            <Sliders group="env" title="Envelope"/>
            <Sliders group="modEnv" title="Mod Envelope"/>
        </div>
    );
}

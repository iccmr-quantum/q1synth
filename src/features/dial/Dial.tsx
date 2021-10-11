import React, { useState } from 'react'
import { Knob } from "react-rotary-knob";
import { constrain } from '../../functions/utils';
import styles from './Dial.module.css';

export function Dial() {
    const [dialPosition, setDialPosition] = useState(0)

    const handleOnChange = (val: number) : void => {
        let angle = val > 180 ? val - 360 : val;
        angle = constrain(angle, -140, 140);
        setDialPosition(angle < 0 ? 360 + angle : angle)
    }
    return (
        <div className={styles.knob}>
            <Knob 
                style={{
                    width: '200px',
                    height: '200px',
                }}
                min={0}
                max={360}
                value={dialPosition}
                unlockDistance={10}
                onChange={handleOnChange} 
            />
        </div>
    );
}   
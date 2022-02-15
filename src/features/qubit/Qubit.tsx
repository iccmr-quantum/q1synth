import React, { useState, useRef, MouseEvent } from 'react'
import { ReactP5Wrapper, Sketch } from "react-p5-wrapper";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getQubit, setControl } from '../../data/dataSlice';
import { mapToRange } from '../../functions/utils';
import styles from './Qubit.module.css';

const sketch: Sketch = p => {
    let x = 0;
    let y = 0;
    let z = 0;
    const radius = 130

    p.setup = () => {
        p.createCanvas(350, 350, p.WEBGL);
        p.perspective(p.PI / 3.0, p.width / p.height, 0.1, 500);
    }

    p.updateWithProps = props => {
        x = props.x ? props.x : x
        y = props.y ? props.y : y
        z = props.z ? props.z : z
    }
    
    p.draw = () => {
        p.angleMode(p.DEGREES)
        p.background('#323232');
        p.rotateX(x);
        p.rotateY(y);
        p.rotateZ(z);
        p.noFill()
        p.stroke('rgba(255,255,255,0.3)')
        p.sphere(radius);
        
        p.noStroke()
        p.fill('rgba(255,255,255,0.5)')
        p.cylinder(2, 2.5 * radius)

        p.rotateX(90);
        p.cylinder(1, 2.2 * radius)

        p.rotateZ(90);
        p.cylinder(1, 2.2 * radius)
    }
}

export function Qubit() {
    const dispatch = useAppDispatch()
    const { x, y, z } = useAppSelector(getQubit);

    const [isClicked, setIsClicked] = useState(false)

    const qubitRef = useRef<null | HTMLDivElement>(null)

    const handleMouseMove = (e: MouseEvent) => {
        const rect = qubitRef.current?.getBoundingClientRect()
        const left = rect?.left || 0
        const top = rect?.top || 0
        const width = rect?.width || 0
        const height = rect?.height || 0

        const x = e.clientX - left
        const y = e.clientY - top
        
        dispatch(setControl({group: 'qubit', key: 'y', value: mapToRange((x/width), 0, 1, -0.5, 0.5)}));
        dispatch(setControl({group: 'qubit', key: 'x', value: mapToRange((y/height), 0, 1, 0.5, -0.5)}));
    }
      
    return (
        <div 
            ref={qubitRef}
            className={styles.container}
            onMouseDown={() => setIsClicked(true)}
            onMouseUp={() => setIsClicked(false)}
            onMouseLeave={() => setIsClicked(false)}
            onMouseMove={(e) => isClicked && handleMouseMove(e)}
        >
            <ReactP5Wrapper 
                sketch={sketch} 
                x={x.value * 360}
                y={y.value * 360}
                z={z.value * 360}
            />
        </div>
    )
}
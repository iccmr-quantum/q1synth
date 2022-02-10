import React from 'react'
import { ReactP5Wrapper, Sketch } from "react-p5-wrapper";
import { useAppSelector } from '../../app/hooks';
import { getQubit } from '../../data/dataSlice';
import styles from './Qubit.module.css';

const sketch: Sketch = p => {
    let x = 0;
    let y = 0;
    let z = 0;
    const radius = 130

    p.setup = () => {
        p.createCanvas(300, 300, p.WEBGL);
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
        p.stroke('#FFF')
        p.sphere(radius);
    }
}

export function Qubit() {
    const { x, y, z } = useAppSelector(getQubit);
      
    return (
        <div className={styles.container}>
            <ReactP5Wrapper 
                sketch={sketch} 
                x={x.value * 360}
                y={y.value * 360}
                z={z.value * 360}
            />
        </div>
    )
}
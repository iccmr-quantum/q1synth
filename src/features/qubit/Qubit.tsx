import React, { createRef, useEffect } from 'react'
import p5 from 'p5'
import { useAppSelector } from '../../app/hooks';
import { getQubit } from '../../data/dataSlice';
import styles from './Qubit.module.css';

export function Qubit() {
    const { x, y, z } = useAppSelector(getQubit);
    const canvas: React.RefObject<HTMLInputElement> = createRef()

    console.log(x)
    
    const sketch = (p: p5) => {
        p.setup = () => {
            p.createCanvas(300, 300, p.WEBGL);
            p.perspective(p.PI / 3.0, p.width / p.height, 0.1, 500);
        }
        
        p.draw = () => {
            console.log(x.value)
            p.angleMode(p.DEGREES)
            p.background('#323232');
            p.rotateX(x.value * 360);
            p.rotateY(y.value * 360);
            p.rotateZ(z.value * 360);
            p.noFill()
            p.stroke('#FFF')
            p.sphere(130);
        }
    }

    useEffect(() => {
        new p5(sketch, canvas.current || undefined)
    }, [])
    
    return (
        <div className={styles.container} ref={canvas} />
    )
}
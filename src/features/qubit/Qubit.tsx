import React, { useState, useRef, MouseEvent, TouchEvent } from 'react'
import { ReactP5Wrapper, Sketch } from "react-p5-wrapper";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { 
    getQubit, 
    setControl, 
    getMode
} from '../../data/dataSlice';
import { mapToRange } from '../../functions/utils';
import { DataStream } from '../dataStream/DataStream';
import styles from './Qubit.module.css';

const sketch: Sketch = p => {
    let x = 0;
    let y = 0;
    let z = 0;
    let size = 350;
    let radius = 130

    const resize = (w: number, h: number) => {
        p.resizeCanvas(w, h)
    }

    p.setup = () => p.createCanvas(size, size, p.WEBGL)

    p.updateWithProps = props => {
        x = props.x ?? x
        y = props.y ?? y
        z = props.z ?? z
        props.size !== size && resize(props.size, props.size);
        size = props.size ?? size
        radius = size / 2.7
    }
    
    p.draw = () => {
        p.angleMode(p.DEGREES)
        p.background('#323232');

        p.noStroke()
        p.fill('white')
        
        p.push()
        p.cylinder(2, 2.5 * radius)
        p.rotateY(45)
        p.rotateX(-10)
        p.rotateZ(-10)
        p.rotateX(90);
        p.cylinder(1, 2.5 * radius)
        p.rotateZ(90);
        p.cylinder(1, 2.5 * radius)
        p.pop()
        
        p.rotateX(x);
        p.rotateY(y);
        p.rotateZ(z);
        
        p.noFill()
        p.stroke('rgba(255,255,255,0.1)')
        p.sphere(radius, 20, 20);
        p.translate(0, -radius - 2.5);
        p.stroke('red')
        p.sphere(2.5);
    }
}

interface QubitProps {
    size?: number
}

export function Qubit({size = 350} : QubitProps) {
    const dispatch = useAppDispatch()
    const { x, y, z } = useAppSelector(getQubit);
    const mode = useAppSelector(getMode)

    const [isClicked, setIsClicked] = useState(false)

    const qubitRef = useRef<null | HTMLDivElement>(null)

    const states = [
        {id: '0', label: '0'},
        {id: '1', label: '1'},
        {id: 'plus', label: '+'},
        {id: 'minus', label: '-'},
        {id: 'i', label: 'i'},
        {id: 'minusi', label: '-i'},
    ]

    const getQubitDimensions = () => {
        const rect = qubitRef.current?.getBoundingClientRect()
        const left = rect?.left || 0
        const top = rect?.top || 0
        const width = rect?.width || 0
        const height = rect?.height || 0
        return { left, top, width, height }
    }

    const handleMove = (e: MouseEvent | TouchEvent<HTMLDivElement>, clientX: number, clientY: number) => {
        if(!isClicked || mode === 'presentation') return

        const { left, top, width, height } = getQubitDimensions()
        const x = clientX - left
        const y = clientY - top

        dispatch(setControl({group: 'qubit', key: 'y', value: mapToRange((x/width), 0, 1, -0.5, 0.5)}));
        dispatch(setControl({group: 'qubit', key: e.shiftKey ? 'z' : 'x', value: mapToRange((y/height), 0, 1, 0.5, -0.5)}));
    }
      
    return (
        <div 
            ref={qubitRef}
            className={styles.container}
            onMouseDown={() => setIsClicked(true)}
            onMouseUp={() => setIsClicked(false)}
            onMouseLeave={() => setIsClicked(false)}
            onMouseMove={e => handleMove(e, e.clientX, e.clientY)}
            onTouchStart={() => setIsClicked(true)}
            onTouchEnd={() => setIsClicked(false)}
            onTouchMove={e => {
                const { clientX, clientY } = e.nativeEvent.touches[0]
                handleMove(e, clientX, clientY)
            }}
        >
            {states.map(({id, label}) => <span key={id} className={`${styles.label} ${styles['label' + id]}`}>{`|${label}⟩`}</span>)}
            <ReactP5Wrapper 
                sketch={sketch} 
                x={x.value * 360}
                y={y.value * 360}
                z={z.value * 360}
                size={window.innerWidth < 450 ? window.innerWidth - 100 : size}
            />
            <DataStream />
        </div>
    )
}
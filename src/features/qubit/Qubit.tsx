import { useState, useRef, MouseEvent, TouchEvent } from 'react'
import { ReactP5Wrapper, Sketch } from "react-p5-wrapper";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getMode } from '../../data/dataSlice';
import {
    Coordinates,
    getQubit,
    setQubit,
} from '../../synthesis/synthesisSlice';
import { mapToRange } from '../../functions/utils';
import { getIsCollapsing } from '../../qasm/qasmSlice';
import { DataStream } from '../dataStream/DataStream';
import { debounce } from 'lodash'
import styles from './Qubit.module.css';

const sketch: Sketch = p => {
    let x = 0;
    let y = 0;
    let z = 0;
    let size = 350;
    let radius = 130

    const resize = (w: number, h: number) => p.resizeCanvas(w, h)

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
        
        p.rotateX(-10)
        p.noStroke()
        p.fill('white')
        
        p.push()
        p.rotateY(-45)
        p.rotateX(90)
        p.cylinder(2, 2 * radius) // x axis
        p.pop()

        p.push()
        p.rotateY(45)
        p.rotateX(90)
        p.cylinder(2, 2 * radius) // y axis
        p.pop()

        p.push()
        p.cylinder(2, 2 * radius) // z axis
        p.pop()
        
        p.rotateY(45)
        
        // Azimuth
        const cos_y = p.cos(-y);
        const sin_y = p.sin(-y);
        // @ts-expect-error
        p.applyMatrix(cos_y, 0.0, sin_y, 0.0, 0.0, 1.0, 0.0, 0.0, -sin_y, 0.0, cos_y, 0.0, 0.0, 0.0, 0.0, 1.0);

        // Inclination
        const cos_x = p.cos(x);
        const sin_x = p.sin(x);
        p.applyMatrix(cos_x, sin_x, -sin_x, cos_x, 0, 0);

        // Phase
        const cos_z = p.cos(z);
        const sin_z = p.sin(z);
        // @ts-expect-error
        p.applyMatrix(cos_z, 0.0, sin_z, 0.0, 0.0, 1.0, 0.0, 0.0, -sin_z, 0.0, cos_z, 0.0, 0.0, 0.0, 0.0, 1.0);

        p.noFill()
        p.stroke('rgba(255,255,255,0.1)')
        p.sphere(radius, 20, 20);
        p.translate(0, -radius - 2.5);
        p.stroke('red')
        p.sphere(4);
    }
}

interface QubitProps {
    size?: number
}

export function Qubit({size = 350} : QubitProps) {
    const dispatch = useAppDispatch()
    const { x, y, z } = useAppSelector(getQubit);
    const mode = useAppSelector(getMode)
    const isCollapsing = useAppSelector(getIsCollapsing)

    const [isClicked, setIsClicked] = useState(false)

    const qubitRef = useRef<null | HTMLDivElement>(null)

    const states = [
        {id: '0', label: '0', qubit: {x: 0, y: 0, z: 0}},
        {id: '1', label: '1', qubit: {x: 1, y: 0, z: 0}},
        {id: 'minus', label: '-', qubit: {x: 0.5, y: 1, z: 0}},
        {id: 'plus', label: '+', qubit: {x: 0.5, y: 0, z: 0}},
        {id: 'i', label: 'i', qubit: {x: 0.5, y: 0.5, z: 0}},
        {id: 'minusi', label: '-i', qubit: {x: 0.5, y: -0.5, z: 0}},
    ]

    const getQubitDimensions = () => {
        const rect = qubitRef.current?.getBoundingClientRect()
        const left = rect?.left || 0
        const top = rect?.top || 0
        const width = rect?.width || 0
        const height = rect?.height || 0
        return { left, top, width, height }
    }

    let handleMove = (e: MouseEvent | TouchEvent<HTMLDivElement>, clientX: number, clientY: number) => {
        if(!isClicked || mode === 'presentation' || isCollapsing) return

        const { left, top, width, height } = getQubitDimensions()
        const xPos = clientX - left
        const yPos = clientY - top
        const qubit = e.shiftKey
            ? {x, y, z: mapToRange((xPos/width), 0, 1, -1, 1)}
            : {x: mapToRange((yPos/width), 0, 1, -1, 1), y: mapToRange((xPos/height), 0, 1, -1, 1), z}
        
        dispatch(setQubit(qubit))
    }

    handleMove = debounce(handleMove, 5)

    const handleStateClick = (e: MouseEvent, qubit: Coordinates) => {
        if(isCollapsing) return
        e.stopPropagation()
        dispatch(setQubit(qubit))
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
            {states.map(({id, label, qubit}) => (
                <span 
                    key={id} 
                    className={`${styles.label} ${styles['label' + id]}`}
                    onClick={e => handleStateClick(e, qubit)}
                >
                    {`|${label}⟩`}
                </span>
            ))}
            <ReactP5Wrapper 
                sketch={sketch} 
                x={x * -180}
                y={y * 180}
                z={z * 180}
                size={window.innerWidth < 450 ? window.innerWidth - 100 : size}
            />
            <DataStream />
        </div>
    )
}
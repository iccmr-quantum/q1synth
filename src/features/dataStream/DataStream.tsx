import React, { useState, useEffect } from 'react';
import { useAppSelector } from '../../app/hooks';
import { getQubit } from '../../data/dataSlice';
import { Qubit } from '../../data/dataSlice';

import styles from './DataStream.module.css';

export function DataStream() {
    const qubit = useAppSelector(getQubit)
    const [data, setData] = useState<Qubit[]>([])
    
    useEffect(() => {
        setData([qubit, ...data.slice(0,27)])
    }, [qubit])
    
    return (
        <ul className={styles.ul}>
            {data.reverse().map(({x, y, z}, i) => (
                <li 
                    className={styles.item}
                    key={i}
                >
                    {[x,z,y].map(({value}, v) => <span key={`${i}_${v}`} className={styles.vector}>{value.toFixed(3)}</span>)}
                </li>
            ))}
        </ul>
    )
}
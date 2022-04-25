import React, { useState, useEffect } from 'react';
import { useAppSelector } from '../../app/hooks';
import { getQubit } from '../../data/dataSlice';
import { Qubit } from '../../data/dataSlice';
import { degreesToRadians as dtr } from '../../functions/utils';

import styles from './DataStream.module.css';

export function DataStream() {
    const qubit = useAppSelector(getQubit)
    const [data, setData] = useState<Qubit[]>([])
    
    useEffect(() => {
        setData([qubit, ...data.slice(0, 15)])
    }, [qubit])

    return (
        <ul className={styles.ul}>
            {data.slice(0).reverse().map(({x, y, z}, i) => (
                <li 
                    className={styles.item}
                    key={i}
                >
                    {[x,y,z].map(({value}, v) => (
                        <span key={`${i}_${v}`} className={styles.vector}>
                            {dtr(value*180).toFixed(2)}
                        </span>
                    ))}
                </li>
            ))}
        </ul>
    )
}
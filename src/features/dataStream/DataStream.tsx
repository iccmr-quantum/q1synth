import { useState, useEffect } from 'react';
import { useAppSelector } from '../../app/hooks';
import { getQubit, Coordinates } from '../../synthesis/synthesisSlice';
import { degreesToRadians as dtr } from '../../functions/utils';

import styles from './DataStream.module.css';

export function DataStream() {
    // TODO: x, y, z should be calculated via matrices
    const qubit = useAppSelector(getQubit)
    const [data, setData] = useState<Coordinates[]>([])
    
    useEffect(() => {
        setData(d => [qubit, ...d.slice(0, 15)])
    }, [qubit])

    return (
        <ul className={styles.ul}>
            <li key='labels'>
                {['θ','φ','λ'].map(symbol => (
                    <span key={symbol} className={styles.label}>
                        {symbol}
                    </span>
                ))}
            </li>
            {data.slice(0).reverse().map(({x, y, z}, i) => (
                <li 
                    className={styles.item}
                    key={i}
                >
                    {[x,y,z].map((value, v) => (
                        <span key={`${i}_${v}`} className={styles.vector}>
                            {dtr(value*180).toFixed(2)}
                        </span>
                    ))}
                </li>
            ))}
        </ul>
    )
}
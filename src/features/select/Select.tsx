import React, {  } from 'react'
import styles from './Select.module.css';

interface selectProps {
    title: string
    options: {id: string, name: string}[]
}

export function Select({options, title} : selectProps) {
    return (
        <div>
            { title && <h2>{ title }</h2> }
            <select className={styles.select}>
                { options && options.map(({id, name}) => (
                    <option 
                        key={id} 
                        className={styles.option}
                        value={id}
                    >{name}</option>
                )) }
            </select>
        </div> 
    );
}   
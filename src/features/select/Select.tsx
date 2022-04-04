import React, {  } from 'react'
import styles from './Select.module.css';

interface onChangeSelectHandler {
    (event: React.ChangeEvent<HTMLSelectElement>) : void
}
interface selectProps {
    title: string
    options: {id: string, label: string}[]
    onChange: onChangeSelectHandler
}

export function Select({options, title, onChange} : selectProps) {
    return (
        <div className={styles.container}>
            { title && <h2>{ title }</h2> }
            <select 
                className={styles.select}
                onChange={e => onChange(e)}
            >
                { options && options.map(({id, label}) => (
                    <option 
                        key={id} 
                        className={styles.option}
                        value={id}
                    >{label}</option>
                )) }
            </select>
        </div> 
    );
}   
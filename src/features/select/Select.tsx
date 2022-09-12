import React, {  } from 'react'
import { values } from 'underscore';
import styles from './Select.module.css';

interface onChangeSelectHandler {
    (event: React.ChangeEvent<HTMLSelectElement>) : void
}
interface selectProps {
    title: string
    value?: string
    options: {id: string, label: string, active?:boolean}[]
    onChange: onChangeSelectHandler
}

export function Select({options, title, value, onChange} : selectProps) {
    return (
        <div className={styles.container}>
            { title && <h2>{ title }</h2> }
            <select 
                className={styles.select}
                onChange={e => onChange(e)}
                defaultValue={value}
            >
                { options && options.map(({id, label, active}) => (
                    <option 
                        key={id} 
                        className={styles.option}
                        value={id}
                        selected={active} 
                    >{label}</option>
                )) }
            </select>
        </div> 
    );
}   
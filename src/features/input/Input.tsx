import React, {  } from 'react'
import styles from './Input.module.css';

interface onChangeInputHandler {
    (event: React.ChangeEvent<HTMLInputElement>) : void
}
interface inputProps {
    title: string
    value: string
    onChange: onChangeInputHandler
}

export function Input({title, value, onChange} : inputProps) {
    return (
        <div>
            { title && <h2>{ title }</h2> }
            <input 
                value={value}
                className={styles.input}
                onChange={e => onChange(e)}
            />
        </div> 
    );
}   
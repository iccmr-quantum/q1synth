import React, { MouseEvent } from 'react'
import styles from './Button.module.css';

interface ButtonProps {
    name: 'play' | 'start',
    isActive: boolean,
    onClick: (e: MouseEvent<HTMLButtonElement>, name: 'play' | 'start') => void
}

export function Button({name, isActive, onClick} : ButtonProps) {
    return (
        <button 
            className={`
                ${styles.button} 
                ${isActive ? styles.active : ''}
            `}
            onClick={(e) => onClick(e, name)}
        >
            { name }
        </button>
    )
}
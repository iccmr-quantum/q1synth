import React, { MouseEvent } from 'react'
import styles from './Button.module.css';

interface ButtonProps {
    name: 'play' | 'start' | 'download',
    activeName?: string,
    isActive: boolean,
    onClick: (e: MouseEvent<HTMLButtonElement>, name: 'play' | 'start' | 'download') => void
}

export function Button({name, activeName, isActive, onClick} : ButtonProps) {
    return (
        <button 
            className={`
                ${styles.button} 
                ${isActive ? styles.active : ''}
            `}
            onClick={(e) => onClick(e, name)}
        >
            { isActive && activeName ? activeName : name }
        </button>
    )
}
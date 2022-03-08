import React, { MouseEvent } from 'react'
import styles from './Button.module.css';

interface ButtonProps {
    name: string
    activeName?: string
    isActive?: boolean
    disabled?: boolean
    onClick: (e: MouseEvent<HTMLButtonElement>, name: string) => void
}

export function Button({name, activeName, isActive = false, disabled = false, onClick} : ButtonProps) {
    return (
        <button 
            className={`
                ${styles.button} 
                ${isActive ? styles.active : ''}
            `}
            onClick={(e) => onClick(e, name)}
            disabled={disabled}
        >
            { isActive && activeName ? activeName : name }
        </button>
    )
}
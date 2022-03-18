import React, { MouseEvent, Dispatch, SetStateAction } from 'react'
import styles from './Button.module.css';

interface ButtonProps {
    name: string
    activeName?: string
    isActive?: boolean
    disabled?: boolean
    onClick: (e: MouseEvent<HTMLButtonElement>, name: string) => void
    setButtonRef?: Dispatch<SetStateAction<HTMLButtonElement | null | undefined>>
}

export function Button({name, activeName, isActive = false, disabled = false, onClick, setButtonRef} : ButtonProps) {
    return (
        <button 
            className={`
                ${styles.button} 
                ${isActive ? styles.active : ''}
            `}
            onClick={(e) => onClick(e, name)}
            disabled={disabled}
            ref={node => setButtonRef && setButtonRef(node)}
        >
            { isActive && activeName ? activeName : name }
        </button>
    )
}
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import styles from './Loading.module.css'


export function Loading() {
    return (
        <div className={styles.container}>
            <div className={styles.overlay} />
            <FontAwesomeIcon icon={faCircleNotch} className={styles.spinner} />
            <p className={styles.copy}>Talking to quantum computer<span className={styles.cursor}>_</span></p>
        </div>
    )
}
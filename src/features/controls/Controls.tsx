import React, {  } from 'react'
import { Dial } from '../dial/Dial';
import { Sliders } from '../sliders/Sliders';
import styles from './Controls.module.css';

export function Controls() {
    return (
        <div className={styles.container}>
            <section className={styles.sliders}>
                <Sliders side="left"/>
            </section>
            <section className={styles.dial}>
                <Dial />
            </section>
            <section className={styles.sliders}>
                <Sliders side="right"/>
            </section>
        </div>
    )
}
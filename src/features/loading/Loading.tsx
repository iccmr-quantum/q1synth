import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { getQasmResponses } from '../../qasm/qasmSlice'

import { useAppSelector } from '../../app/hooks';
import styles from './Loading.module.css'

export function Loading() {
    const qasmResponses = useAppSelector(getQasmResponses)

    return (
        <div className={styles.container}>
            <div className={styles.overlay} />
            <FontAwesomeIcon icon={faCircleNotch} className={styles.spinner} />
            <ul className={styles.responses}>
                <li className={styles.response}>Talking to quantum computer</li>
                {qasmResponses.map((response: string, i) => <li key={i} className={styles.response}>{response}</li>)}
            </ul>
            
        </div>
    )
}
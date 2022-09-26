import { useAppSelector, useAppDispatch} from '../../app/hooks';
import { Param, getDisabled, toggleSelectedParam, moveSelectedParams } from '../../synthesis/synthesisSlice';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import styles from './SliderGroup.module.css';

interface sliderGroupProps {
    id: string
    label?: string
    params: Param[]
    invert?: boolean | undefined
    valuesI?: number
    onChange: (groupId: string, paramType: string, valueI: number, value: number) => void
}

export function SliderGroup({id, label, params, valuesI = 0, invert = false, onChange} : sliderGroupProps) {
    const dispatch = useAppDispatch();
    const disabled = useAppSelector(getDisabled)
    const isSelectable = ['xParams', 'yParams', 'zParams'].includes(id)

    return (
        <div className={styles.sliders}>
            { 
                label && <h2 
                    className={`
                        ${invert ? styles.textrightA : ''} 
                        ${styles.h2}
                    `}
                    onClick={() => dispatch(moveSelectedParams(id))}
                >{ label }</h2> 
            }
            
            {params.map(({type, values, selected}, i) => (
                <div key={`${id}${i}`} className={styles.container}>
                    <Slider
                        className={styles.slider}
                        min={0} 
                        max={1}
                        onChange={(value) => onChange(id, type, valuesI, value)}
                        step={0.0001}
                        disabled={disabled}
                        value={values[valuesI]}
                    />
                    <p 
                        className={`
                            ${styles.label} 
                            ${invert ? styles.labelInvert : ''} 
                            ${selected ? styles.labelSelected : ''}
                        `}
                        onClick={() => isSelectable && dispatch(toggleSelectedParam({key: id, type}))}
                    >{ type }</p>
                </div>
            ))}
        </div> 
    )
}
import { useAppSelector, useAppDispatch} from '../../app/hooks';
import { Param, getDisabled, toggleSelectedParam, moveSelectedParams } from '../../synthesis/synthesisSlice';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import styles from './SliderGroup.module.css';

interface sliderGroupProps {
    group: string
    label?: string
    params: Param[]
    invert?: boolean | undefined
    valuesI?: number
    onChange: (id: string, valueI: number, value: number) => void
}

export function SliderGroup({group, label, params, valuesI = 0, invert = false, onChange} : sliderGroupProps) {
    const dispatch = useAppDispatch();
    const disabled = useAppSelector(getDisabled)
    const isSelectable = ['xParams', 'yParams', 'zParams'].includes(group)

    return (
        <div className={styles.sliders}>
            { 
                label && <h2 
                    className={`
                        ${invert ? styles.textrightA : ''} 
                        ${styles.h2}
                    `}
                    onClick={() => dispatch(moveSelectedParams(group))}
                >{ label }</h2> 
            }
            
            {params.map(({type, values, selected, id}, i) => (
                <div key={id} className={styles.container}>
                    <Slider
                        className={styles.slider}
                        min={0} 
                        max={1}
                        onChange={(value) => onChange(id, valuesI, value)}
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
                        onClick={() => isSelectable && dispatch(toggleSelectedParam(id))}
                    >{ type }</p>
                </div>
            ))}
        </div> 
    )
}
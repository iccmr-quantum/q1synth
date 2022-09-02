
import { Param } from './synthesisSlice'

export const granularParams: Param[] = [
    { type: 'rate', id: 'rate', min: 0.5, max: 4, step: 0, values: [0.5, 4] },
    { type: 'size', id: 'size', min: 0.05, max: 1, step: 0, values: [0.05, 1] },
    { type: 'overlap', id: 'overlap', min: 0.1, max: 1, step: 0, values: [0, 0.5] },
]

export const fmParams: Param[] = [
    { type: 'modi', id: 'modi', min: 0, max: 20, step: 0, values: [5, 20] },
    { type: 'harm', id: 'harm', min: 0.25, max: 10, step: 0.25, values: [2, 10] },
]

export const subtractiveParams: Param[] = [
    { type: 'rate', id: 'rate', min: 0, max: 1, step: 0, values: [0, 1] },
    { type: 'depth', id: 'depth', min: 0, max: 1, step: 0, values: [0, 1] },
]

export const synthesisParams = {
    granular: granularParams,
    fm: fmParams,
    subtractive: subtractiveParams,
}
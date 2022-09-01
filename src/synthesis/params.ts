
import { Param } from './synthesisSlice'

export const granularParams: Param[] = [
    { type: 'rate', min: 0.25, max: 4, step: 0, values: [0, 4] },
    { type: 'size', min: 0.05, max: 1, step: 0, values: [0, 1] },
    { type: 'overlap', min: 0.05, max: 0.5, step: 0, values: [0, 0.5] },
]

export const fmParams: Param[] = [
    { type: 'modi', min: 0, max: 20, step: 0, values: [0, 20] },
    { type: 'harm', min: 0.25, max: 10, step: 0, values: [0, 10] },
]

export const subtractiveParams: Param[] = [
    { type: 'rate', min: 0, max: 1, step: 0, values: [0, 1] },
    { type: 'depth', min: 0, max: 1, step: 0, values: [0, 1] },
]

export const synthesisParams = {
    granular: granularParams,
    fm: fmParams,
    subtractive: subtractiveParams,
}
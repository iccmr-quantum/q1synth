
import { Param } from './synthesisSlice'

export const granularParams: Param[] = [
    { type: 'rate', min: 0.25, max: 4, step: 0 },
    { type: 'size', min: 0.05, max: 1, step: 0 },
    { type: 'overlap', min: 0.05, max: 0.5, step: 0 },
]

export const fmParams: Param[] = [
    { type: 'modi', min: 0, max: 20, step: 0 },
    { type: 'harm', min: 0.25, max: 10, step: 0 },
]

export const subtractiveParams: Param[] = [
    { type: 'rate', min: 0, max: 1, step: 0 },
    { type: 'depth', min: 0, max: 1, step: 0 },
]

export const synthesisParams = {
    granular: granularParams,
    fm: fmParams,
    subtractive: subtractiveParams,
}
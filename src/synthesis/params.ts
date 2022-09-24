
import { Param } from './synthesisSlice'

export const granularParams: Param[] = [
    { type: 'rate', id: 'rate', min: 0.25, max: 4, step: 0, values: [0, 1], selected: false },
    { type: 'size', id: 'size', min: 0.05, max: 1, step: 0, values: [0, 1], selected: false },
    { type: 'overlap', id: 'overlap', min: 0.1, max: 1, step: 0, values: [0, 0.5], selected: false },
    { type: 'begin', id: 'begin', min: 0, max: 1, step: 0, values: [0, 0], selected: false },
    { type: 'end', id: 'end', min: 0, max: 1, step: 0, values: [0, 0], selected: false },
]

export const fmParams: Param[] = [
    { type: 'modi', id: 'modi', min: 0, max: 20, step: 0, values: [0.5, 1], selected: false },
    { type: 'harm', id: 'harm', min: 0.25, max: 10, step: 0.25, values: [0.25, 1], selected: false },
]

export const subtractiveParams: Param[] = [
    { type: 'rate', id: 'rate', min: 0, max: 1, step: 0, values: [0, 1], selected: false },
    { type: 'depth', id: 'depth', min: 0, max: 1, step: 0, values: [0, 1], selected: false },
]

export const synthesisParams = {
    granular: granularParams,
    fm: fmParams,
    subtractive: subtractiveParams,
}

export const genericParams = [
    { type: 'note', id: 'n', min: 0, max: 7, step: 1, values: [0, 1], selected: false },
    { type: 'gain', id: 'amp', min: 0, max: 1, step: 0, values: [0.75, 1], selected: false },
    { type: 'octave', id: 'oct', min: 3, max: 7, step: 1, values: [0.5, 0.5], selected: false },
]

export const effectParams = [
    { type: 'reverb', id: 'reverb', min: 0, max: 1, step: 0, values: [0, 0], selected: false },
    { type: 'delay', id: 'delay', min: 0, max: 1, step: 0, values: [0, 0], selected: false },
    { type: 'crush', id: 'crush', min: 16, max: 4, step: 0, values: [0, 0], selected: false },
    { type: 'pan', id: 'pan', min: -1, max: 1, step: 0, values: [0.5, 0.5], selected: false },
    { type: 'hicut', id: 'hicut', min: 100, max: 20000, step: 0, values: [1, 1], selected: false },
    { type: 'locut', id: 'locut', min: 0, max: 5000, step: 0, values: [0, 0], selected: false },
]
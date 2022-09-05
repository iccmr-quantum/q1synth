import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { synthesisParams } from './params';
import { blendBetweenValues, mapToRange, roundToNearestX } from '../functions/utils';
import synthesis from './synthesis';

// These should remain in sync
export type SynthType = 'fm' | 'granular' | 'subtractive'
export const synthTypes = ['fm', 'granular', 'subtractive']

export interface Param {
    type: string
    id: string
    min: number
    max: number
    step: number
    values: number[]
}

export interface Coordinates {
    x: number
    y: number
    z: number
}

export interface SynthesisState {
    synth: SynthType
    qubit: Coordinates
    params: {
        [key: string]: Param[]
    }
    sample: number
}

const initialSynth = 'fm'

const initialState: SynthesisState = {
    synth: initialSynth,
    qubit: {
        x: 0,
        y: 0,
        z: 0
    },
    params: {
        xParams: [
            { type: 'note', id: 'n', min: 0, max: 7, step: 1, values: [0, 7] },
            { type: 'gain', id: 'amp', min: 0, max: 1, step: 0, values: [0.75, 1] },
            { type: 'octave', id: 'oct', min: 3, max: 7, step: 1, values: [5, 5] },
        ],
        yParams: synthesisParams[initialSynth],
        zParams: [
            { type: 'reverb', id: 'reverb', min: 0, max: 1, step: 0, values: [0, 0] },
            { type: 'delay', id: 'delay', min: 0, max: 1, step: 0, values: [0, 0] },
            { type: 'crush', id: 'crush', min: 0, max: 1, step: 0, values: [0, 0] },
            { type: 'pan', id: 'pan', min: -1, max: 1, step: 0, values: [0, 0] },
            { type: 'hicut', id: 'hicut', min: 100, max: 20000, step: 0, values: [20000, 20000] },
            { type: 'locut', id: 'locut', min: 0, max: 5000, step: 0, values: [0, 0] },
        ],
        envParams: [
            { type: 'attack', id: 'a', min: 0, max: 1, step: 0, values: [0.1] },
            { type: 'decay', id: 'd', min: 0, max: 1, step: 0, values: [0.2] },
            { type: 'sustain', id: 's', min: 0, max: 1, step: 0, values: [0.5] },
            { type: 'release', id: 'r', min: 0, max: 1, step: 0, values: [1] }
        ],
        modEnvParams: [
            { type: 'attack', id: 'moda', min: 0, max: 1, step: 0, values: [0] },
            { type: 'decay', id: 'modd', min: 0, max: 1, step: 0, values: [0.2] },
            { type: 'sustain', id: 'mods', min: 0, max: 1, step: 0, values: [0.5] },
            { type: 'release', id: 'modr', min: 0, max: 1, step: 0, values: [1] }
        ],
    },
    sample: 0
};

export const synthesisSlice = createSlice({
    name: 'synthesis',
    initialState,
    reducers: {
        setSynth: (state, action: PayloadAction<SynthType>) => {
            state.synth = action.payload;
            synthesis.setType(action.payload);
        },
        setCustomParams: (state, action: PayloadAction<Param[]>) => {
            state.params.yParams = action.payload;
        },
        setParam: (state, action: PayloadAction<{key: string, type: string, valuesI: number, value: number}>) => {
            const { key, type, valuesI, value } = action.payload;
            const param = state.params[key].find(p => p.type === type);
            param && (param.values[valuesI] = formatValue(value, param.step));
            synthesis.setParams(formatSynthParams(state));
        },
        setQubit: (state, action: PayloadAction<Coordinates>) => {
            state.qubit = action.payload;
            synthesis.setParams(formatSynthParams(state));
        },
        incrementQubitBy: (state, action: PayloadAction<Coordinates>) => {
            const { x, y, z } = action.payload;
            state.qubit.x += x
            state.qubit.y += y
            state.qubit.z += z
            synthesis.setParams(formatSynthParams(state));
        },
        play: (state) => synthesis.play(formatSynthParams(state)),
        stop: () => synthesis.stop(),
        randomise: (state) => {
            const { xParams, yParams, zParams, envParams, modEnvParams } = state.params;
            [...xParams, ...yParams, ...zParams, ...envParams, ...modEnvParams].forEach((param: Param) => {
                if(['hicut', 'locut', 'gain'].includes(param.type)) return;

                param.values = param.values.map(() => {
                    return formatValue(
                        Math.random() * (param.max - param.min) + param.min, 
                        param.step
                    )
                })
            })

            synthesis.setParams(formatSynthParams(state));
        }
    }
});

export const getSynth = (state: RootState) => state.synthesis.synth;
export const getXParams = (state: RootState) => state.synthesis.params.xParams;
export const getYParams = (state: RootState) => state.synthesis.params.yParams;
export const getZParams = (state: RootState) => state.synthesis.params.zParams;
export const getEnvParams = (state: RootState) => state.synthesis.params.envParams;
export const getModEnvParams = (state: RootState) => state.synthesis.params.modEnvParams;
export const getQubit = (state: RootState) => state.synthesis.qubit;

export const { 
    setSynth,
    setCustomParams,
    setParam,
    setQubit,
    incrementQubitBy,
    play,
    stop,
    randomise
} = synthesisSlice.actions;

/**
 * Ensure params are rounded to step value or to 2 decimal places
 */
function formatValue(value: number, step: number) {
    return step ? roundToNearestX(value, step) : Math.round(value * 100) / 100;
}

/**
 * Any final scaling of the param value should be done here
**/
function sanitiseParam(key: string, value: number) {
    switch(key) {
        case 'n':
            // TODO: add in more scales?
            return [0,2,3,5,7,9,10,12][Math.floor(value)] + 36
        case 'crush':
            return mapToRange(value, 0, 1, 16, 4)
        default:
            return value;
    }
}

/**
 * Calculate a synth param based on the qubit position
**/
function calculateParamValue(param: Param, angle: number) {
    const { values } = param;
    const interpolatedValue = blendBetweenValues(angle, values, [0, 180])
    return {id: param.id, value: interpolatedValue}
}

/**
 * Format synth params into the shape required by CtSynths package
**/
function formatSynthParams(state: SynthesisState) {
    const { params, qubit } = state;
    const x = mapToRange(qubit.x, -1, 1, 0, 360);
    const y = mapToRange(qubit.y, -1, 1, 0, 360);
    const z = mapToRange(qubit.z, -1, 1, 0, 360);
    const flattened = [
        ...params.xParams.map(p => calculateParamValue(p, x)),
        ...params.yParams.map(p => calculateParamValue(p, y)),
        ...params.zParams.map(p => calculateParamValue(p, z)),
        ...params.envParams.map(p => ({id: p.id, value: p.values[0]})),
        ...params.modEnvParams.map(p => ({id: p.id, value: p.values[0]})),
    ];
    
    return Object.values(flattened).reduce((obj, {id, value}) => {
        return { 
            ...obj, 
            [id]: sanitiseParam(id, value) 
        }; 
    }, {})
}

export default synthesisSlice.reducer;
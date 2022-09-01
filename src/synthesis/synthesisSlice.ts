import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { format } from 'util';
import { RootState } from '../app/store';
import { synthesisParams } from './params';
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
export interface SynthesisState {
    synth: SynthType
    params: {
        [key: string]: Param[]
    }
}

const initialSynth = 'fm'

const initialState: SynthesisState = {
    synth: initialSynth,
    params: {
        xParams: [
            { type: 'note', id: 'n', min: 0, max: 7, step: 1, values: [0, 7] },
            { type: 'detune', id: 'detune', min: -12000, max: 12000, step: 0, values: [-12000, 12000] },
            { type: 'gain', id: 'amp', min: 0, max: 1, step: 0, values: [0, 1] },
        ],
        yParams: synthesisParams[initialSynth],
        zParams: [
            { type: 'reverb', id: 'reverb', min: 0, max: 1, step: 0, values: [0, 0] },
            { type: 'delay', id: 'delay', min: 0, max: 1, step: 0, values: [0, 0] }
        ],
        envParams: [
            { type: 'attack', id: 'a', min: 0, max: 1, step: 0, values: [0.01] },
            { type: 'decay', id: 'd', min: 0, max: 1, step: 0, values: [0.1] },
            { type: 'sustain', id: 's', min: 0, max: 1, step: 0, values: [0.5] },
            { type: 'release', id: 'r', min: 0, max: 1, step: 0, values: [1] }
        ],
        modEnvParams: [
            { type: 'attack', id: 'moda', min: 0, max: 1, step: 0, values: [0.01] },
            { type: 'decay', id: 'modd', min: 0, max: 1, step: 0, values: [0.1] },
            { type: 'sustain', id: 'mods', min: 0, max: 1, step: 0, values: [0.5] },
            { type: 'release', id: 'modr', min: 0, max: 1, step: 0, values: [1] }
        ],
    }
};

export const synthesisSlice = createSlice({
    name: 'synthesis',
    initialState,
    reducers: {
        setSynth: (state, action: PayloadAction<SynthType>) => {
            state.synth = action.payload;
        },
        setCustomParams: (state, action: PayloadAction<Param[]>) => {
            state.params.yParams = action.payload;
        },
        setParam: (state, action: PayloadAction<{key: string, type: string, valuesI: number, value: number}>) => {
            const { key, type, valuesI, value } = action.payload;
            const param = state.params[key].find(p => p.type === type);
            param && (param.values[valuesI] = value);
            // TODO: calculate based on qubit position
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

export const { 
    setSynth,
    setCustomParams,
    setParam,
} = synthesisSlice.actions;

function sanitiseParam(key: string, value: number) {
    switch(key) {
        case 'n':
            return [0,2,3,5,7,9,10,12][value] + 36
        default:
            return value;
    }
}

function formatSynthParams(state: SynthesisState) {
    const { params } = state;
    const flattened = [...params.xParams, ...params.yParams, ...params.zParams, ...params.envParams, ...params.modEnvParams];
    return Object.values(flattened).reduce((obj, param) => {
        return { ...obj, [param.id]: sanitiseParam(param.id, param.values[0]) }; // TODO: calculate based on qubit position
    }, {})
}

export default synthesisSlice.reducer;
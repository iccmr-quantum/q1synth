import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { Dictionary } from '../types';
import { synthesisParams } from './params';

// These should remain in sync
export type SynthType = 'fm' | 'granular' | 'subtractive'
export const synthTypes = ['fm', 'granular', 'subtractive']
export interface Param {
    type: string
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
            { type: 'note', min: 0, max: 8, step: 1, values: [0, 8] },
            { type: 'detune', min: -12000, max: 12000, step: 0, values: [-12000, 12000] },
            { type: 'gain', min: 0, max: 1, step: 0, values: [0, 1] },
        ],
        yParams: synthesisParams[initialSynth],
        zParams: [
            { type: 'reverb', min: 0, max: 1, step: 0, values: [0, 0] },
            { type: 'delay', min: 0, max: 1, step: 0, values: [0, 0] }
        ]
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
        }
    }
});

export const getSynth = (state: RootState) => state.synthesis.synth;
export const getXParams = (state: RootState) => state.synthesis.params.xParams;
export const getYParams = (state: RootState) => state.synthesis.params.yParams;
export const getZParams = (state: RootState) => state.synthesis.params.zParams;

export const { 
    setSynth,
    setCustomParams,
    setParam,
} = synthesisSlice.actions;


export default synthesisSlice.reducer;
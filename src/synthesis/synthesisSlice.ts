import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { synthesisParams } from './params';

// These should remain in sync
export type SynthType = 'fm' | 'granular' | 'subtractive'
export const synthTypes = ['fm', 'granular', 'subtractive']
export interface Param {
    type: string
    min: number
    max: number
    step: number
}
export interface SynthesisState {
    synth: SynthType
    xParams: Param[];
    yParams: Param[];
    zParams: Param[];
}

const initialSynth = 'fm'

const initialState: SynthesisState = {
    synth: initialSynth,
    xParams: [
        { type: 'note', min: 0, max: 8, step: 1 },
        { type: 'detune', min: -5000, max: 5000, step: 0 },
        { type: 'gain', min: 0, max: 1, step: 0 },
    ],
    yParams: synthesisParams[initialSynth],
    zParams: [
        { type: 'reverb', min: 0, max: 0, step: 0 },
        { type: 'delay', min: 0, max: 0, step: 0 }
    ]
};

export const synthesisSlice = createSlice({
    name: 'synthesis',
    initialState,
    reducers: {
        setSynth: (state, action: PayloadAction<SynthType>) => {
            state.synth = action.payload;
        },
        setCustomParams: (state, action: PayloadAction<Param[]>) => {
            state.yParams = action.payload;
        }
    }
});

export const getSynth = (state: RootState) => state.synthesis.synth;

export const { 
    setSynth,
    setCustomParams
} = synthesisSlice.actions;


export default synthesisSlice.reducer;
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

// These should remain in sync
export type SynthType = 'fm' | 'granular' | 'subtractive'
export const synthTypes = ['fm', 'granular', 'subtractive']
interface Param {
    type: string
    min: number
    max: number
    value: number
}
export interface SynthesisState {
    synth: SynthType
    xParams: Param[];
    yParams: Param[];
    zParams: Param[];
}

const initialState: SynthesisState = {
    synth: 'fm',
    xParams: [],
    yParams: [],
    zParams: []
};

export const synthesisSlice = createSlice({
    name: 'synthesis',
    initialState,
    reducers: {
        setSynth: (state, action: PayloadAction<SynthType>) => {
            state.synth = action.payload;
        }
    }
});

export const getSynth = (state: RootState) => state.synthesis.synth;

export const { 
    setSynth,
} = synthesisSlice.actions;


export default synthesisSlice.reducer;
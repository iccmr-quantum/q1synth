import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SynthArgs } from '.';
import { makeSynth } from './synths';

const initialState: any = {
    synth: makeSynth()
};

export const soundSlice = createSlice({
    name: 'sound',
    initialState,
    reducers: {
        startSynth: (state, action: PayloadAction<SynthArgs>) => {
            state.synth = state.synth.on(action.payload)
        },
        stopSynth: (state, action: PayloadAction<SynthArgs>) => {
            state.synth = state.synth.off(action.payload)
        },
        setSynth: (state, action: PayloadAction<SynthArgs>) => {
            state.synth = state.synth.set(action.payload)
        },
    }
});

export const { startSynth, stopSynth, setSynth } = soundSlice.actions;

export default soundSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { makeSynth } from './synths';

const initialState: any = {
    synth: makeSynth({freq: 100, amp: 0.5})
};

export const soundSlice = createSlice({
    name: 'sound',
    initialState,
    reducers: {
        startSynth: (state) => {
            state.synth = state.synth.on()
        },
        stopSynth: (state) => {
            state.synth = state.synth.off()
        }
    }
});

export const { startSynth, stopSynth } = soundSlice.actions;

export default soundSlice.reducer;

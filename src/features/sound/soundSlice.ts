import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Slider, Dictionary } from '../../types';
import { RootState } from '../../app/store';
import { mapToRange, average } from '../../functions/utils';
import { synth, SynthArgs } from '.';

interface SynthSliders {
    freq: Slider
    amp: Slider
    reverb: Slider
    modIndex: Slider
    harmonicity: Slider
}

export interface SoundState extends Dictionary {
    dial: number
    left: SynthSliders
    right: SynthSliders
    env: Slider[]
    modEnv: Slider[]
}

const initialState: SoundState = {
    dial: 0,
    left: {
        freq: {value: 0.05, label: 'freq'},
        amp: {value: 1, label: 'amp'},
        reverb: {value: 0, label: 'reverb'},
        modIndex: {value: 0.5, label: 'mod index'},
        harmonicity: {value: 1, label: 'harmonicity'},
    },
    right: {
        freq: {value: 0.05, label: 'freq'},
        amp: {value: 1, label: 'amp'},
        reverb: {value: 0, label: 'reverb'},
        modIndex: {value: 0.5, label: 'mod index'},
        harmonicity: {value: 1, label: 'harmonicity'},
    },
    env: [
        {value: 0.01, label: 'attack'},
        {value: 0.1, label: 'decay'},
        {value: 0.5, label: 'sustain'},
        {value: 0.5, label: 'release'}
    ],
    modEnv: [
        {value: 0.01, label: 'attack'},
        {value: 1, label: 'decay'},
        {value: 1, label: 'sustain'},
        {value: 0.5, label: 'release'}
    ]
};

export const soundSlice = createSlice({
    name: 'sound',
    initialState,
    reducers: {
        setDialValue: (state, action: PayloadAction<number>) => {
            state.dial = action.payload;
        },
        setSliderAndSynthValues: (state, action: PayloadAction<{group: string, key: string, value: number, dial: number}>) => {
            const { group, key, value } = action.payload
            state[group][key].value = value;
            // synth.set(calculateParams(state))
        }
    }
});

export const { setDialValue, setSliderAndSynthValues } = soundSlice.actions;

export const getDialValue = (state: RootState) => state.sound.dial;
export const getSlidersValue = (group: string) => (state: RootState) => state.sound[group];
export const getSynthParams = (state: RootState) : SynthArgs => calculateParams(state.sound)

const calculateParams = (state: SoundState) => {
    const { left, right } = state
    // How can you get the dial state
    const freq = mapToRange(average(left.freq.value, right.freq.value), 0, 1, 50, 1000)
    const volume = mapToRange(average(left.amp.value, right.amp.value), 0, 1, -50, -3)
    const reverb = mapToRange(average(left.reverb.value, right.reverb.value), 0, 1, 0, 0.8)
    const modulationIndex = mapToRange(average(left.modIndex.value, right.modIndex.value), 0, 1, 0, 20)
    const harmonicity = Math.round(mapToRange(average(left.harmonicity.value, right.harmonicity.value), 0, 1, 1, 20))
    
    return { freq, volume, reverb, modulationIndex, harmonicity }
}


export default soundSlice.reducer;

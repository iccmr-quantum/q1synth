import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Slider, Dictionary } from '../../types';
import { mapToRange, average } from '../../functions/utils';
import { SynthArgs } from '../sound';

export interface SlidersState extends Dictionary {
    left: Slider[];
    right: Slider[];
}

const initialState: SlidersState = {
    left: [
        {value: 0.05, label: 'freq'},
        {value: 1, label: 'amp'},
        {value: 0, label: 'reverb'},
        {value: 0.5, label: 'mod index'},
        {value: 1, label: 'harmonicity'},
    ],
    right: [
        {value: 0.05, label: 'freq'},
        {value: 1, label: 'amp'},
        {value: 0.5, label: 'reverb'},
        {value: 0, label: 'mod index'},
        {value: 0, label: 'harmonicity'},
    ],
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

export const slidersSlice = createSlice({
    name: 'sliders',
    initialState,
    reducers: {
        setSliderValue: (state, action: PayloadAction<{group: string, index: number, value: number}>) => {
            const { group, index, value } = action.payload
            state[group][index].value = value;
        }
    }
});

export const { setSliderValue } = slidersSlice.actions;

export const getSlidersValue = (group: string) => (state: RootState) => state.sliders[group];

export const getSynthParams = (state: RootState) : SynthArgs => {
    const { left, right, env, modEnv } = state.sliders
    const freq = mapToRange(average(left[0].value, right[0].value), 0, 1, 50, 1000)
    const volume = mapToRange(average(left[1].value, right[1].value), 0, 1, -50, -3)
    const reverb = mapToRange(average(left[2].value, right[2].value), 0, 1, 0, 0.8)
    const modulationIndex = mapToRange(average(left[3].value, right[3].value), 0, 1, 0, 20)
    const harmonicity = Math.round(mapToRange(average(left[4].value, right[4].value), 0, 1, 1, 20))
    
    return { freq, volume, reverb, modulationIndex, harmonicity }
}

export default slidersSlice.reducer;

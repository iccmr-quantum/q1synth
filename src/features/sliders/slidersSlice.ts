import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Slider, Dictionary } from '../../types';

export interface SlidersState extends Dictionary {
    left: Slider[];
    right: Slider[];
}

const initialState: SlidersState = {
    left: [
        {value: 0, label: 'freq'},
        {value: 0, label: 'amp'},
        {value: 0, label: 'partials'},
        {value: 0, label: 'mod index'},
        {value: 0, label: 'harmonicity'},
    ],
    right: [
        {value: 0, label: 'freq'},
        {value: 0, label: 'amp'},
        {value: 0, label: 'partials'},
        {value: 0, label: 'mod index'},
        {value: 0, label: 'harmonicity'},
    ],
    env: [
        {value: 0, label: 'a'},
        {value: 0, label: 'd'},
        {value: 0, label: 's'},
        {value: 0, label: 'r'},
    ],
    modEnv: [
        {value: 0, label: 'a'},
        {value: 0, label: 'd'},
        {value: 0, label: 's'},
        {value: 0, label: 'r'}
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

export default slidersSlice.reducer;

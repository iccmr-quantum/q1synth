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
    ]
};

export const slidersSlice = createSlice({
    name: 'sliders',
    initialState,
    reducers: {
        setSliderValue: (state, action: PayloadAction<{side: string, index: number, value: number}>) => {
            const { side, index, value } = action.payload
            state[side][index].value = value;
        }
    }
});

export const { setSliderValue } = slidersSlice.actions;

export const getSlidersValue = (side: string) => (state: RootState) => state.sliders[side];

export default slidersSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type Dictionary = { [index: string]: any }

export interface SlidersState extends Dictionary {
    left: number[];
    right: number[];
}

const initialState: SlidersState = {
    left: [0,0,0,0,0],
    right: [0,0,0,0,0]
};

export const slidersSlice = createSlice({
    name: 'sliders',
    initialState,
    reducers: {
        setSliderValue: (state, action: PayloadAction<{side: string, index: number, value: number}>) => {
            const { side, index, value } = action.payload
            state[side][index] = value;
        }
    }
});

export const { setSliderValue } = slidersSlice.actions;

export const getSlidersValue = (side: string) => (state: RootState) => state.sliders[side];

export default slidersSlice.reducer;

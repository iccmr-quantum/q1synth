import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Dictionary } from '../../types';

export interface ButtonsState extends Dictionary {
    start: boolean,
    play: boolean
}

const initialState: ButtonsState = {
    start: false, play: false
};

export const buttonSlice = createSlice({
    name: 'buttons',
    initialState,
    reducers: {
        setButtonValue: (state, action: PayloadAction<{button: 'start' | 'play', isActive: boolean}>) => {
            const { button, isActive } = action.payload
            state.start = button === 'play' ? false : state.start
            state[button] = isActive;
        }
    }
});

export const { setButtonValue } = buttonSlice.actions;

export const getButtonValue = (button: 'start' | 'play') => (state: RootState) => state.buttons[button];

export default buttonSlice.reducer;

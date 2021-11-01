import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Dictionary } from '../../types';

export interface ButtonsState extends Dictionary {
    start: boolean,
    measure: boolean,
    download: boolean,
    disabled: boolean
}

const initialState: ButtonsState = {
    start: false, measure: false, download: false, disabled: false
};

export const buttonsSlice = createSlice({
    name: 'buttons',
    initialState,
    reducers: {
        setButtonValue: (state, action: PayloadAction<{button: 'start' | 'measure' | 'download'}>) => {
            const { button } = action.payload
            const { measure: isMeasuring, start: isStarted } = state

            state.start = button === 'measure' && !isMeasuring ? false : state.start
            state.measure = button === 'start' && !isStarted ? false : state.measure
            state[button] = !state[button];
        },
        setButtonsDisabled: (state) => {
            state.disabled = true
        },
        setButtonsActive: (state) => {
            state.disabled = false
        }
    }
});

export const { setButtonValue, setButtonsDisabled, setButtonsActive } = buttonsSlice.actions;

export const getButtonValue = (button: 'start' | 'measure') => (state: RootState) => state.buttons[button];
export const getDisabledStatus = (state: RootState) => state.buttons.disabled

export default buttonsSlice.reducer;

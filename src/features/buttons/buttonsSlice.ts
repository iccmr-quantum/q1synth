import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Dictionary } from '../../types';

export interface ButtonsState extends Dictionary {
    rotate: boolean,
    measure: boolean,
    download: boolean,
    disabled: boolean
}

const initialState: ButtonsState = {
    rotate: false, measure: false, download: false, disabled: false
};

export const buttonsSlice = createSlice({
    name: 'buttons',
    initialState,
    reducers: {
        setButtonValue: (state, action: PayloadAction<{button: 'rotate' | 'measure' | 'download'}>) => {
            const { button } = action.payload
            const { measure: isMeasuring, rotate: isRotating } = state

            state.rotate = button === 'measure' && !isMeasuring ? false : state.rotate
            state.measure = button === 'rotate' && !isRotating ? false : state.measure
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

export const getButtonValue = (button: 'rotate' | 'measure') => (state: RootState) => state.buttons[button];
export const getDisabledStatus = (state: RootState) => state.buttons.disabled

export default buttonsSlice.reducer;

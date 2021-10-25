import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Dictionary } from '../../types';

export interface ButtonsState extends Dictionary {
    start: boolean,
    play: boolean,
    download: boolean,
    disabled: boolean
}

const initialState: ButtonsState = {
    start: false, play: false, download: false, disabled: false
};

export const buttonsSlice = createSlice({
    name: 'buttons',
    initialState,
    reducers: {
        setButtonValue: (state, action: PayloadAction<{button: 'start' | 'play' | 'download'}>) => {
            const { button } = action.payload
            const { play: isPlaying, start: isStarted } = state

            state.start = button === 'play' && !isPlaying ? false : state.start
            state.play = button === 'start' && !isStarted ? false : state.play
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

export const getButtonValue = (button: 'start' | 'play') => (state: RootState) => state.buttons[button];
export const getDisabledStatus = (state: RootState) => state.buttons.disabled

export default buttonsSlice.reducer;

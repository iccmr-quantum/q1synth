import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Dictionary } from '../../types';
import { synth } from '../sound';

export interface ButtonsState extends Dictionary {
    start: boolean,
    play: boolean,
    download: boolean
}

const initialState: ButtonsState = {
    start: false, play: false, download: false
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

        }
    }
});

export const { setButtonValue } = buttonsSlice.actions;

export const getButtonValue = (button: 'start' | 'play') => (state: RootState) => state.buttons[button];

export default buttonsSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { AppThunk } from '../app/store'
import { WebMidi } from 'webmidi';

export interface MidiInput {
    id: string
    name: string
}

export interface MidiState {
    isEnabled: boolean
    inputs: MidiInput[]
    activeInputID: string | null
}


const initialState: MidiState = {
    isEnabled: false,
    inputs: [],
    activeInputID: null
};

export const midiSlice = createSlice({
    name: 'midi',
    initialState,
    reducers: {
        setMidiStatus: (state, action: PayloadAction<boolean>) => {
            state.isEnabled = action.payload;
        },
        setMidiInputs: (state, action: PayloadAction<MidiInput[]>) => {
            state.inputs = action.payload
        },
        setActiveInput: (state, action: PayloadAction<string>) => {
            state.activeInputID = action.payload
        }
    }
});

export const { setMidiStatus, setMidiInputs, setActiveInput } = midiSlice.actions;

export const getMidiStatus = (state: RootState) => state.midi.isEnabled;
export const getMidiInputs = (state: RootState) => state.midi.inputs;
export const getActiveMidiInput = (state: RootState) => state.midi.activeInputID;

export const enableMidi = (): AppThunk => async dispatch => {
    await WebMidi.enable()
    dispatch(setMidiStatus(WebMidi.enabled))
    WebMidi.enabled && dispatch(setMidiInputs(WebMidi.inputs.map(({id, name}) => ({id, name}))));
}

export default midiSlice.reducer;

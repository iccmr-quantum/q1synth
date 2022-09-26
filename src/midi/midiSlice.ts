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
    activeInputID: string
}


const initialState: MidiState = {
    isEnabled: false,
    inputs: [],
    activeInputID: ''
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
            state.inputs.map(({id}) => WebMidi.getInputById(id).removeListener())
            state.activeInputID = action.payload
        }
    }
});

export const { setMidiStatus, setMidiInputs, setActiveInput } = midiSlice.actions;

export const getMidiStatus = (state: RootState) => state.midi.isEnabled;
export const getMidiInputs = (state: RootState) => state.midi.inputs;
export const getActiveMidiInput = (state: RootState) => state.midi.activeInputID;

export const enableMidi = (): AppThunk => async dispatch => {
    if(!navigator.requestMIDIAccess) return 
    await WebMidi.enable()
    dispatch(setMidiStatus(WebMidi.enabled))
    const fromMax = WebMidi.getInputByName('from Max 1')
    console.log(fromMax.id)
    WebMidi.enabled 
        && dispatch(setMidiInputs(WebMidi.inputs.map(({id, name}) => ({id, name}))))
        && dispatch(setActiveInput(fromMax.id || WebMidi.inputs[0].id));
}

export default midiSlice.reducer;

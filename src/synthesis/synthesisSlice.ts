import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export interface SynthesisState {

}

const initialState: SynthesisState = {

};

export const synthesisSlice = createSlice({
    name: 'synthesis',
    initialState,
    reducers: {
        
    }
});

export const { 

} = synthesisSlice.actions;

// export const getMode = (state: RootState) => state.synthesis.mode;

export default synthesisSlice.reducer;
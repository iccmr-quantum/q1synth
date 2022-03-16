import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dictionary } from '../types';
import { RootState } from '../app/store';


export interface QasmState extends Dictionary {
    qasmStatus: boolean
}

const initialState: QasmState = {
    qasmStatus: false,
};

export const qasmSlice = createSlice({
    name: 'qasm',
    initialState,
    reducers: {
        setQasmStatus: (state, action: PayloadAction<boolean>) => {
            state.qasmStatus = action.payload
        }
    }
});

export const { 
    setQasmStatus
} = qasmSlice.actions;

export const getQasmStatus = (state: RootState) => state.data.qasmStatus;


export default qasmSlice.reducer;

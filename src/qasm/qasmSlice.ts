import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dictionary } from '../types';
import { RootState } from '../app/store';

export interface QasmResponse {
    id: number
    data: any
}

export interface QasmState extends Dictionary {
    qasmStatus: boolean
    responses: QasmResponse[]
}

const initialState: QasmState = {
    qasmStatus: false,
    responses: []
};

export const qasmSlice = createSlice({
    name: 'qasm',
    initialState,
    reducers: {
        setQasmStatus: (state, action: PayloadAction<boolean>) => {
            state.qasmStatus = action.payload
        },
        setQasmResponse: (state, action: PayloadAction<QasmResponse>) => {
            state.responses = [
                ...state.responses,
                action.payload
            ]
        }
    }
});

export const { 
    setQasmStatus,
    setQasmResponse
} = qasmSlice.actions;

export const getQasmStatus = (state: RootState) => state.qasm.qasmStatus;
export const getQasmResponseByID = (i: number) => (state: RootState) => {
    return state.qasm.responses.find(({id}) => id === i) || false
};


export default qasmSlice.reducer;

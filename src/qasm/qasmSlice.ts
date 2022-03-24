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
    isMeasuring: boolean
}

const initialState: QasmState = {
    qasmStatus: false,
    responses: [],
    isMeasuring: false
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
        },
        setIsMeasuring: (state, action: PayloadAction<boolean>) => {
            state.isMeasuring = action.payload
        },
    }
});

export const { 
    setQasmStatus,
    setQasmResponse,
    setIsMeasuring
} = qasmSlice.actions;

export const getQasmStatus = (state: RootState) => state.qasm.qasmStatus;
export const getIsMeasuring = (state: RootState) => state.qasm.isMeasuring;
export const getQasmResponseByID = (i: number) => (state: RootState) => {
    return state.qasm.responses.find(({id}) => id === i) || false
};


export default qasmSlice.reducer;

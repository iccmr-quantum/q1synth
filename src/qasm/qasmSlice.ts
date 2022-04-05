import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dictionary } from '../types';
import { RootState } from '../app/store';

export interface QasmState extends Dictionary {
    useQasm: boolean
    qasmStatus: boolean
    responses: string[]
    isMeasuring: boolean
    backend: string
}

const initialState: QasmState = {
    useQasm: false,
    qasmStatus: false,
    responses: [],
    isMeasuring: false,
    backend: 'ibmq_santiago'
};

export const qasmSlice = createSlice({
    name: 'qasm',
    initialState,
    reducers: {
        setUseQasm: (state, action: PayloadAction<boolean>) => {
            state.useQasm = action.payload
        },
        setQasmStatus: (state, action: PayloadAction<boolean>) => {
            state.qasmStatus = action.payload
        },
        setQasmResponse: (state, action: PayloadAction<string>) => {
            state.responses = [
                ...state.responses,
                action.payload
            ]
        },
        clearQasmResponses: state => {
            state.responses = []
        },
        setIsMeasuring: (state, action: PayloadAction<boolean>) => {
            state.isMeasuring = action.payload
        },
        setBackend: (state, action: PayloadAction<string>) => {
            state.backend = action.payload
        },
    }
});

export const { 
    setUseQasm,
    setQasmStatus,
    setQasmResponse,
    clearQasmResponses,
    setIsMeasuring,
    setBackend
} = qasmSlice.actions;

export const getUseQasm = (state: RootState) => state.qasm.useQasm;
export const getQasmStatus = (state: RootState) => state.qasm.qasmStatus;
export const getIsMeasuring = (state: RootState) => state.qasm.isMeasuring;
export const getBackend = (state: RootState) => state.qasm.backend;
export const getQasmResponses = (state: RootState) => state.qasm.responses

export default qasmSlice.reducer;

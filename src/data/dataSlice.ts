import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dictionary } from '../types';
import { RootState } from '../app/store';

export type Mode = 'simple' | 'advanced' | 'presentation'
export interface DataState extends Dictionary {
    mode: Mode
    isFullScreen: boolean
    preset: number
    destination: 0 | 1
    shouldRecord: boolean
}

const initialState: DataState = {
    mode: 'advanced',
    isFullScreen: false,
    preset: 0,
    destination: 0,
    shouldRecord: false
};

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<DataState>) => {
            Object.entries(action.payload).map(([key,value]) => state[key] = value)
        },
        setMode: (state, action: PayloadAction<Mode>) => {
            state.mode = action.payload
        },
        toggleIsFullScreen: (state) => {
            state.isFullScreen = !state.isFullScreen
        },
        setShouldRecord: (state, action: PayloadAction<boolean>) => {
            state.shouldRecord = action.payload
        },
    }
});

export const { 
    setData, 
    setMode, 
    toggleIsFullScreen, 
    setShouldRecord
} = dataSlice.actions;

export const getMode = (state: RootState) => state.data.mode;
export const getDestination = (state: RootState) => state.data.destination;
export const getIsFullScreen = (state: RootState) => state.data.isFullScreen;
export const getMintData = (state: RootState) : DataState => {
    return {
        ...state.data,
        mode: 'advanced',
        isFullScreen: true,
    }
}

export const getShouldRecord = (state: RootState) => state.data.shouldRecord

export default dataSlice.reducer;

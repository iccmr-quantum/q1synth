import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dictionary } from '../types';
import { RootState } from '../app/store';

export interface Times extends Dictionary {
    one: boolean
    five: boolean
    ten: boolean
}

export type Mode = 'simple' | 'advanced' | 'presentation'

export interface DataState extends Dictionary {
    mode: Mode
    isFullScreen: boolean
    times: Times
    preset: number
    destination: 0 | 1
    shouldRecord: boolean
}

const initialState: DataState = {
    mode: 'advanced',
    isFullScreen: false,
    times: {
        one: false, five: true, ten: false
    },
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
        setTime: (state, action: PayloadAction<{button: string }>) => {
            const { button } = action.payload
            const reset = {one: false, five: false, ten: false}
            state.times = {...reset, [button]: true}
        },
        setShouldRecord: (state, action: PayloadAction<boolean>) => {
            state.shouldRecord = action.payload
        },
        setPreset: (state, action: PayloadAction<number>) => {
            state.preset = action.payload;
        },
    }
});

export const { 
    setData, 
    setMode, 
    toggleIsFullScreen, 
    setTime,
    setShouldRecord,
    setPreset
} = dataSlice.actions;

export const getMode = (state: RootState) => state.data.mode;
export const getDestination = (state: RootState) => state.data.destination;
export const getIsFullScreen = (state: RootState) => state.data.isFullScreen;
export const getPresetNumber = (state: RootState) => state.data.preset
export const getTimes = (state: RootState) => state.data.times
export const getTime = (state: RootState) => {
    return state.data.times.one 
        ? 1
        : state.data.times.five
            ? 5
            : 10
}
export const getMintData = (state: RootState) : DataState => {
    return {
        ...state.data,
        mode: 'advanced',
        isFullScreen: true,
    }
}

export const getShouldRecord = (state: RootState) => state.data.shouldRecord

export default dataSlice.reducer;

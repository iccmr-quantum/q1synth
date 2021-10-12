import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
// import { fetchCount } from './counterAPI';

export interface DialState {
    value: number;
}

const initialState: DialState = {
    value: 0
};

export const dialSlice = createSlice({
    name: 'dial',
    initialState,
    reducers: {
        setDialValue: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        }
    }
});

export const { setDialValue } = dialSlice.actions;

export const getDialValue = (state: RootState) => state.dial.value;

export default dialSlice.reducer;

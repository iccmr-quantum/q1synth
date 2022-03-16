import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import dataReducer from '../data/dataSlice';
import midiReducer from '../midi/midiSlice';
import qasmSlice from '../qasm/qasmSlice';

export const store = configureStore({
    reducer: {
        data: dataReducer,
        midi: midiReducer,
        qasm: qasmSlice
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

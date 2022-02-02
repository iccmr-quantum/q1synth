import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import dataReducer from '../data/dataSlice';
import midiReducer from '../midi/midiSlice';

export const store = configureStore({
    reducer: {
        data: dataReducer,
        midi: midiReducer
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

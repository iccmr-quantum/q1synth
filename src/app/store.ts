import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import buttonsReducer from '../features/buttons/buttonsSlice';
import dataReducer from '../data/dataSlice';

export const store = configureStore({
    reducer: {
        buttons: buttonsReducer,
        data: dataReducer
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

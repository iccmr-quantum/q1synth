import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import buttonsReducer from '../features/buttons/buttonsSlice';
import soundReducer from '../features/sound/synthSlice';

export const store = configureStore({
    reducer: {
        buttons: buttonsReducer,
        sound: soundReducer
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

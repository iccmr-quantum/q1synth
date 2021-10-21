import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import dialReducer from '../features/dial/dialSlice';
import buttonsReducer from '../features/buttons/buttonsSlice';
import soundReducer from '../features/sound/soundSlice';

export const store = configureStore({
    reducer: {
        dial: dialReducer,
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

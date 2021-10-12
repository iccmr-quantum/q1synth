import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import dialReducer from '../features/dial/dialSlice';
import slidersReducer from '../features/sliders/slidersSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    dial: dialReducer,
    sliders: slidersReducer,
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

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

export const store = configureStore({
    reducer: { user: userReducer }
   });

   //this will return type State?
   export type RootState = ReturnType<typeof store.getState>;

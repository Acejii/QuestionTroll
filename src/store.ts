import {configureStore} from '@reduxjs/toolkit';
import bankSlice from './components/Bank/bankSlice';
import selectSlice from './components/Select/selectSlice';
import logger from 'redux-logger';
import { useDispatch } from 'react-redux';

const store = configureStore({
    reducer: {
        bank: bankSlice,
        select: selectSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store
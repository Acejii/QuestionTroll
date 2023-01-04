import {configureStore} from '@reduxjs/toolkit';
import bankSlice from './components/Bank/bankSlice';
import selectSlice from './components/Select/selectSlice';
import logger from 'redux-logger';
import TodoSlice from './components/Todos/TodoSlice';
import calculatorSlice from './components/Calculator/calculatorSlice';

const store = configureStore({
    reducer: {
        bank: bankSlice,
        select: selectSlice,
        todo: TodoSlice,
        calculator: calculatorSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
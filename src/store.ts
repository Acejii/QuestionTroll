import {configureStore} from '@reduxjs/toolkit';
import bankSlice from './components/Bank/bankSlice';
import selectSlice from './components/Select/selectSlice';

const store = configureStore({
    reducer: {
        bank: bankSlice,
        select: selectSlice
    }

})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
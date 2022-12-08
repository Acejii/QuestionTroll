import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
    money: number;
}

const initialState: State = {
    money: 0,
}

const bankSlice = createSlice({
    name: 'bank',
    initialState,
    reducers: {
        deposit: (state: State, action: PayloadAction<number>) => {
            state.money += action.payload
        },

        withdraw: (state: State, action: PayloadAction<number>) => {
            state.money -= action.payload
        },

        bankrupt: (state: State, action: PayloadAction<number>) => {
            state.money *= action.payload
        }
    }
})

export const { deposit, withdraw, bankrupt } = bankSlice.actions
export default bankSlice.reducer
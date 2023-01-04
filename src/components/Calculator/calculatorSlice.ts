import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CalcalatorState {
value1: string
value2: string;
mark: string;
result: number,
syntax: string;
}

const initialState: CalcalatorState = {
    value1: "",
    value2: "",
    result: 0,
    mark: '',
    syntax: ''
};

const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
    addValue1: (state: CalcalatorState, action: PayloadAction<string>) => {
        state.value1 = action.payload
    },

    addValue2: (state: CalcalatorState, action: PayloadAction<string>) => {
        state.value2 = action.payload
    },

    addMark: (state: CalcalatorState, action: PayloadAction<string>) => {
            state.mark = action.payload    
    },

    setResult: (state: CalcalatorState, action: PayloadAction<number>) => {
        state.result = action.payload
    },

    removeValue1: (state: CalcalatorState, action: PayloadAction<string>) => {
        state.value1 = action.payload
    },

    removeValue2: (state: CalcalatorState, action: PayloadAction<string>) => {
        state.value2 = action.payload
    },

    removeMark: (state: CalcalatorState) => {
        state.mark = ''
    },

    removeAllSyntax: (state: CalcalatorState) => {
        state.value1 = ''
        state.value2 = ''
        state.mark = ''
   },   
    }
})

export const { addValue1, addValue2, addMark, setResult, removeValue1, removeValue2, removeMark, removeAllSyntax } = calculatorSlice.actions;
export default calculatorSlice.reducer;
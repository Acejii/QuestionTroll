import { createSlice, current, original, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "./interface";
import store from "../../store";

const setLocalStorage = (value: Item[]) => {
return localStorage.setItem('items', JSON.stringify(value))
}

interface State {
    item: string;
    selectedItems: Item[]
    
}

const initialState: State = {
item: '',
selectedItems: JSON.parse(localStorage.getItem("items") ?? '[]')
}

const selectSlice = createSlice({
    name: 'select',
    initialState,
    reducers: {
        setSelectedItem(state: State, action: PayloadAction<Item>) {
            state.selectedItems = [...state.selectedItems, action.payload]
            setLocalStorage(state.selectedItems)
            console.log(current(state))
        },

        removeSelectItem(state: State, action: PayloadAction<Item>) {
            const newSelectItems = state.selectedItems.filter(item => item.value !== action.payload.value)
            state.selectedItems = newSelectItems
            setLocalStorage(state.selectedItems)
        },

        removeAllSelectItems(state: State) {
            state.selectedItems = []
            setLocalStorage(state.selectedItems)
        },

    }
})

export const {setSelectedItem, removeSelectItem,removeAllSelectItems} = selectSlice.actions
export default selectSlice.reducer
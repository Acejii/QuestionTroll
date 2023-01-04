import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoProps } from "./Todo";

interface State {
    todos: TodoProps[];
}



const initialState: State = {
    todos: JSON.parse(localStorage.getItem("todos") || "[]"),
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, { payload }: PayloadAction<TodoProps>) => {
            state.todos = [...state.todos, payload];
        },
        removeTodo: (state, { payload }: PayloadAction<string>) => {
            state.todos = state.todos.filter(todo => todo.id!== payload);
        },       

        setLocalStorage: (state) => {
            localStorage.setItem("todos", JSON.stringify(state.todos));
        }
    }
})

export const { addTodo, removeTodo, setLocalStorage } = todoSlice.actions;
export default todoSlice.reducer
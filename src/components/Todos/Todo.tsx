import React, { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import TodoList from './TodoList';
import { addTodo, setLocalStorage } from './TodoSlice';

export interface TodoProps {
    id: string;
    name: string;
}

const Todo = () => {

    const inputRef = useRef<HTMLInputElement | null>(null);

    const dispatch = useAppDispatch()
    const {todos} = useAppSelector(state => state.todo)
   
    useEffect(() => {
        inputRef.current?.focus();
    }, [])

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            todo: { value: string };
        };

        const todo = {
            id: Math.random().toString(),
            name: target.todo.value,
        }
        if(todo.name === '') {
            alert('Please enter a todo');
            inputRef.current?.focus();
            return;
        }
        dispatch(addTodo(todo))
        dispatch(setLocalStorage())
        target.todo.value = '';
        inputRef.current!.focus()
    }

  return (
    <div className=''>
        <h1 className='mb-5'>TODOS</h1>

        <form className='flex gap-4 justify-center items-center' onSubmit={handleSubmit}>
            <label htmlFor="todo">Todo</label>
            <input type="text" name='todo' id='todo' placeholder='Input todo' className='outline-none shadow-md border-black px-2 py-1' ref={inputRef}/>
            <button className='px-3 py-2 shadow-md bg-blue-300 rounded-lg'>Submit</button>
        </form>
        
        <TodoList todos={todos}/>
    </div>
  )
}

export default Todo
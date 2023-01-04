import React from 'react'
import { TodoProps } from './Todo'
import TodoItem from './TodoItem'

interface Props {
    todos: TodoProps[]
}

const TodoList = (props: Props) => {
    const { todos } = props

    return (
        <div className='mt-5'>
           {todos.map(todo => <TodoItem key={todo.id} item={todo}/>)}
        </div>
    )
  
}

export default TodoList
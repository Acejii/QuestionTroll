import React from 'react'
import { useAppDispatch } from '../../hooks'
import { TodoProps } from './Todo'
import { removeTodo, setLocalStorage } from './TodoSlice'

interface Props {
    item: TodoProps
}

const TodoItem = (props: Props) => {
    const {item} = props
    const dispatch = useAppDispatch()
    const handleRemove = (id: string) => {
        dispatch(removeTodo(id))
        dispatch(setLocalStorage())
    }

  return (
    <div className=''>
        <span>{item.name} <span className='font-bold text-[18px] ml-3 cursor-pointer' onClick={() => handleRemove(item.id)}>&times;</span></span>
    </div>
  )
}

export default TodoItem
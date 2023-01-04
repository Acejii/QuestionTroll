import React from 'react'
import {RiDeleteBack2Fill} from 'react-icons/ri'

interface KeyProps {
value: string | number;
onClick: (key: string | number) => void;
}

const Key = (props: KeyProps) => {
    const {value, onClick} = props

    const handleShowChildren = () => {
      if(typeof value === 'number') return value;
      if(typeof value === 'string') {
        if(value === 'RiDeleteBack2Fill') {
         return (
          <RiDeleteBack2Fill />
         ) 
        }
        return value.toUpperCase()
      }
      
    }

  return (
    <div className={`flex justify-center items-center ${value === '.'? 'w-2/3' : 'w-1/3'} text-[20px] font-medium h-[70px] border-l-[1px] border-b-[1px] bg-gray-300 hover:opacity-80 hover:cursor-pointer`} onClick={() => onClick(value)}>{handleShowChildren()}</div>
  )
}

export default Key
import React from 'react'

interface IProps {
    value: string;
    onClick: () => void
}

const Item = (props: IProps) => {
    const {value, onClick} = props
  return (
    <div className='flex items-center justify-center p-2 shadow-sm border-2 w-1/4 rounded-md hover:opacity-70 hover:cursor-pointer' onClick={onClick}>
        <p className='mr-3'>{value}</p>
        <span className='font-bold text-[18px]'>
            &times;
        </span>
    </div>
  )
}

export default Item
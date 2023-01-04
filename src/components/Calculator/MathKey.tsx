import React from 'react'

interface MathKeyProps {
    value: string;
    onClick: (key: string) => void;
}

const MathKey = (props: MathKeyProps) => {
    const { value, onClick } = props
  return (
    <div className='flex justify-center items-center w-full h-[70px] bg-orange-500 text-white text-[20px] font-medium border-b-[1px] hover:opacity-80 hover:cursor-pointer' onClick={() => onClick(value)}>{value.toUpperCase()}</div>
  )
}

export default MathKey
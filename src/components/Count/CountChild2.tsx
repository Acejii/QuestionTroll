import { memo } from "react"
import React from 'react'

interface Props {
    increaseCount2: () => void;
    total: number;
}

const CountChild2 = (props: Props) => {
    const { increaseCount2, total } = props
    console.log('rerender count2')
  return (
    <div className=''>
        <div className='text-[20px] font-bold'>This is the count 2</div>
        <div className='text-[20px] font-bold'>Total: {total}</div>
        <button className='px-3 py-2 bg-green-300' onClick={increaseCount2}>InCreaseCount2</button>
    </div>
  )
}

export default CountChild2
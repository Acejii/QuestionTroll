import React, { useCallback, useMemo } from 'react'
import CountChild1 from './CountChild1'
import CountChild2 from './CountChild2'

const Count = () => {
    console.log()

    const [count1, setCount1] = React.useState<number>(0)
    const [count2, setCount2] = React.useState<number>(0)
    const [disabled, setDisabled] = React.useState<boolean>(false)

    const increaseCount1 = useCallback(() => {
       setCount1(count1 + 1)
    }, [count1])

    const increaseCount2 = useCallback(() => {
        setCount2(prev => prev + 1)
    }, [count2])

    const total = useMemo(() => {
        console.log('rerender total')
        return count1 + count2
    }, [count1])

    console.log('rerender count parent')

  return (
    <div>
        <div className='text-[20px] font-bold'>Count1: {count1}</div>
        <div className='text-[20px] font-bold'>Count2: {count2}</div>
        <CountChild1 increaseCount1={increaseCount1} disabled={disabled}/>
        <CountChild2 increaseCount2={increaseCount2} total={total}/>
    </div>
  )
}

export default Count
import React, {memo} from 'react'

interface Props {
    increaseCount1: () => void;
    disabled: boolean;
}

const CountChild1 = (props: Props) => {
    const {increaseCount1, disabled} = props;

    console.log('rerender count1')
  return (
    <div className='my-10'>
        <div className='text-[20px] font-bold'>This is the count 1</div>
        <button className='px-3 py-2 bg-green-300' onClick={increaseCount1} disabled={disabled}>{disabled ? 'sending': 'IncreaseCount1'}</button>
    </div>
  )
}

export default memo(CountChild1)
import React, { useState, useRef } from 'react'
import { useAppDispatch } from '../../hooks';
import { bankrupt, deposit, withdraw } from './bankSlice';

interface Props {
    label: string;
    action: 'deposit' | 'withdraw' | 'bankrupt'
}

const Input = (props: Props) => {
    const dispatch = useAppDispatch()
    const [value, setValue] = useState<number>(0)
    const inputRef = useRef<HTMLInputElement | null>(null)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(props.action === 'deposit') {
            dispatch(deposit(value))

        }
        else if(props.action === 'withdraw') {
            dispatch(withdraw(value))
        }
        else if(props.action === 'bankrupt') {
            dispatch(bankrupt(value))
        }
        setValue(0)
        inputRef.current!.focus()
    }
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="input" className='font-bold inline-block w-[100px]'>{props.label}</label>
        <input className='w-[100px]' id='input' type='number' value={value} onChange = {(e) => setValue(Number(e.target.value))} ref={inputRef}/>
        <button className='ml-3 shadow-md' type='submit'>Submit</button>
    </form>
  )
}

export default Input
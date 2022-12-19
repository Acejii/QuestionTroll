import React from 'react'
import { useAppSelector } from '../../hooks';
import { RootState } from '../../store';
import Bankrupt from './Bankrupt';
import Deposit from './Deposit';
import Withdraw from './Withdraw';

const Bank: React.FC = () => {
    const {money} = useAppSelector(state => state.bank)
    console.log(money)
  return (
  <>
    <div>
        <h3>Money in bank</h3>
        <p>{money.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</p>
    </div>

    <div className='mt-[50px]'>
        <Deposit />
        <Withdraw />
        <Bankrupt />
    </div>
  </>
  )
}

export default Bank
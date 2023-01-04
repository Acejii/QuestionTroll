import React, { useRef, useState } from 'react'
import Item from './Item';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import {BiDownArrow} from 'react-icons/bi'
import { setSelectedItem,removeSelectItem,removeAllSelectItems } from './selectSlice';
import SelectItem from './SelectItem';

const items = [
  {label: 'First', value: "First"},
  {label: 'Second', value: "Second"},
  {label: 'Third', value: "Third"},
  {label: 'Fourth', value: "Fourth"},
  {label: 'Fifth', value: "Fifth"},
]

const Selection:React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const {selectedItems} = useSelector((state: RootState) => state.select)
  const dispatch = useDispatch()
  const modalRef = useRef<HTMLDivElement | null>(null)

  const handleOpenSelect = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setOpen(!open)
  }

  const handleSelectItem = (value: string) => {
    const index = selectedItems.findIndex(item => item.value === value)
    if(index !== -1) {
      dispatch(removeSelectItem({value}))
    } else {
      dispatch(setSelectedItem({value}))
    }
  }

  const handleRemoveItem = (value: string) => {
    dispatch(removeSelectItem({value}))
  }

  const handleRemoveAllItems = () => {
    dispatch(removeAllSelectItems())
  }

  const handleClickOutSide = (e: React.MouseEvent<HTMLElement>) => {
    if(modalRef.current && !modalRef.current.contains(e.target as Element)) {
      setOpen(false)
    } 
  }

  return (
    <div className='w-full h-full py-3' onClick={handleClickOutSide}>
      <h1>Selection</h1>
      <div className='mt-10 mx-2 p-3 border-2 border-gray-200 flex items-center relative' ref={modalRef}>
        <div className='seclection flex-1'>
          <div className="flex items-center flex-wrap gap-2">
            {selectedItems && selectedItems.length > 0 && selectedItems.map(item => (
              <Item value={item.value} key={item.value} onClick={() => handleRemoveItem(item.value)}/>
            ))}
          </div>
        </div>

        <div className='w-10 h-10 flex justify-center items-center font-bold text-[24px] hover:cursor-pointer hover:opacity-75' onClick={handleRemoveAllItems}>
          &times;    
        </div>

        <div className='border-[1px] border-gray-200 h-[48px]'>
        </div>

        <div className='h-10 w-10 flex justify-center items-center hover:cursor-pointer hover:opacity-75' onClick={handleOpenSelect}>
          <BiDownArrow size={14}/>
        </div>

        {open && <div className='border-2 border-gray-200 absolute left-0 right-0 top-full w-full z-10'>
          {items.map(item => (
            <SelectItem key={item.value} value={item.value} onClick={() => handleSelectItem(item.value)}/>
          ))}
        </div>}

      </div>
    </div>
  )
}

export default Selection
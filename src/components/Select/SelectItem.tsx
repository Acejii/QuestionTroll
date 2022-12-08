import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { RootState } from '../../store';

interface IProps {
    value: string;
    onClick: () => void
}

const SelectItem = (props: IProps) => {
    const {value, onClick} = props

    const [active, setActive] = useState<boolean>(false)

    const {selectedItems} = useSelector((state: RootState) => state.select)
    const dispatch = useDispatch()
    useEffect(() => {
        const index = selectedItems.findIndex(item => item.value === value)
        if(index === -1) {
            setActive(false)
        } else {
            setActive(true)
        }
    }, [selectedItems])
  return (
    <div className={`item p-2 my-1 hover:bg-green-300 hover:cursor-pointer ${active? 'active': ''}`} onClick={onClick}>{value}</div>
  )
}

export default SelectItem
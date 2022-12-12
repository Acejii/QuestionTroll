import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosTest = () => {
    const [data, setdata] = useState<string[]>([])
    useEffect(() => {
        const fetchData = async () => {
            axios.post('https://jsonplaceholder.typicode.com/todos/1', {}, {})
            .then((res) => {
                console.log(res)
            }, (error) => {
                console.log(error)
            })
        }
        fetchData()
    }, [])
  return (
    <div>AxiosTest</div>
  )
}

export default AxiosTest
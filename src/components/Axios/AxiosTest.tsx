import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosTest = () => {
    const [data, setdata] = useState<string[]>([])
    useEffect(() => {
        const fetchData = async () => {
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                setdata(res.data)
            }, (error) => {
                console.log(error)
            })
        }
        fetchData()
    }, [])
  return (
    <div>{data.map((item:any) => {
        return <p key={item.id}>{item.title}</p>
    })}</div>
  )
}

export default AxiosTest
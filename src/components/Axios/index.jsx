import React from 'react'
import {Button} from 'antd'
import axios from 'axios'

export default function AxiosTest() {
  const test = () => {
    axios.defaults.baseURL = 'http://localhost:8081/users';
    axios.get('/axiosGet', {
      params: {
        name: 'lh',
        age: 23,
      },
      headers: {
        name: 'zsr',
      }
    })
  }
  return (
    <div>
      <Button onClick={test}>test</Button>
    </div>
  )
}

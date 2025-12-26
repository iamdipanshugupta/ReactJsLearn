import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const {userid} = useParams()
  return (
    <div className='text-center bg-gray-300 text-3xl m-4 p-4'>
      User:${userid}
    </div>
  )
}

export default User

import React from 'react'
import RegisterForm from '../ui/RegisterForm'

const page = () => {
  return (
    <div className='flex w-full mt-10 justify-center '>
        <div className='w-1/2 shadow-md p-5'>
        <RegisterForm/>
        </div>
    </div>
  )
}

export default page
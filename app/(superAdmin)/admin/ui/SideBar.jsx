import React from 'react'
import MenuBar from './MenuBar'

const SideBar = () => {
  return (
    <div className=' h-full border-r inset-0 flex-col flex overflow-y-auto bg-white shadow-sm '>
        <h1 className='text-rose-600 font-bold text-center text-4xl py-5 font-serif'>E-Coach</h1>
        <MenuBar/>
    </div>
  )
}

export default SideBar
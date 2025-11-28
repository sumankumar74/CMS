import React from 'react'
import MobileNavBar from './MobileNavBar'
import AdminHeader from './AdminHeader'

const NavBar = () => {
  return (
    <div className='p-4 border-b h-full flex items-center bg-white shadow-md'>
        <MobileNavBar/>
        <AdminHeader/>
    </div>
  )
}

export default NavBar
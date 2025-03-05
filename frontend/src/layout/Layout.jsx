import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const Layout = () => {
  return (
   <>
   <div className='bg-gradient-to-r min-h-screen  from-white to-[#f1d7f4]'>
   <Header/>
   <Sidebar/>
   <Outlet/>
   </div>
  
   </>
  )
}

export default Layout

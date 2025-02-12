import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router'

const MainLayout = () => {

  return (
    <div className='w-full min-h-screen flex flex-col'>
  <Header/>
    <main className='grow bg-[#FAFAFA] py-12'>
        <Outlet/>
    </main>
    </div>

  )
}

export default MainLayout

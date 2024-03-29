import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import SideBar from './SideBar'

const Body = () => {
    return (
        <>
            <Header />
            <div className='flex'>
                <SideBar />
                <Outlet />
            </div>
        </>
    )
}

export default Body
import React, { Fragment, useState } from 'react'


import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <Fragment>

    <div className='bg-dark'>

    <button onClick={toggleSidebar}>Toggle Sidebar</button>
    {isSidebarOpen && <Sidebar />}      <div className="container  ">     
        <Outlet/>
      </div>    </div>       
    </Fragment>
  )
}

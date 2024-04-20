import React, { Fragment } from 'react'


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

      <Navbar/>
      <div className="container  ">     
        <Outlet/>
      </div>    </div>       
    </Fragment>
  )
}

import React, { Fragment } from 'react'


import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
export default function Layout() {
  return (
    <Fragment>

      <Navbar/>
      <div className="container bg-dark ">     
        <Outlet/>
      </div>           
    </Fragment>
  )
}
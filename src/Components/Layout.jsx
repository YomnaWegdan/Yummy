import React, { Fragment } from "react";

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
export default function Layout() {

  
  return (
    <Fragment>
      <div className="bg-black min-vh-100">
      
  <Sidebar/>
        <div className="container  ">
          <Outlet />
        </div>{" "}
      </div>
    </Fragment>
  );
}

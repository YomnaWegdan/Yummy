import React, { Fragment, useState } from "react";

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  
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

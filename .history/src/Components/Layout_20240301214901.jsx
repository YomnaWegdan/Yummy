import React, { Fragment, useState } from "react";

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <Fragment>
      <div className="bg-black">
        {/*
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />
  */}
  <Sidebar/>
        <div className="container  ">
          <Outlet />
        </div>{" "}
      </div>
    </Fragment>
  );
}
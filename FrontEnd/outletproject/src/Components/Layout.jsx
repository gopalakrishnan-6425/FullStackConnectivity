import React from "react";
import Sidebar from "./Sidebar";
import NavbarComponents from "./NavbarComponents";
import { Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  let getData = JSON.parse(localStorage.getItem("user"));
  console.log(getData)
  
  return (
    <div className="layout">
      <Sidebar />

      <div className="content-area">
        <NavbarComponents dashData={getData} />

        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;

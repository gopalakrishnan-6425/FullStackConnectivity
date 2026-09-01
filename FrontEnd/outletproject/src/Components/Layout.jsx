import React from "react";
import Sidebar from "./Sidebar";
import NavbarComponents from "./NavbarComponents";
import { Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />

      <div className="content-area">
        <NavbarComponents />

        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;

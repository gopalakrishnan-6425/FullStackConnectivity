import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import NavbarComponents from "./NavbarComponents";

const Layout = () => {
  return (
    <>
      <Sidebar />
      <NavbarComponents />

      <main className="main-content">
        <Outlet />
      </main>

      <style>{`
        .main-content {
          margin-left: 230px;
          padding-top: 60px;
          min-height: 100vh;
          background-color: #f5f6fa;
        }
      `}</style>
    </>
  );
};

export default Layout;

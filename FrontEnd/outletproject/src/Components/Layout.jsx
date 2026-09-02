import React from "react";
import Sidebar from "./Sidebar";
import NavbarComponents from "./NavbarComponents";
import { Outlet, useLocation } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  const location = useLocation();
  console.log(location.state);
  localStorage.setItem("setData", JSON.stringify(location.state));
  let userData = JSON.parse(localStorage.getItem("setData"));
  return (
    <div className="layout">
      <Sidebar />

      <div className="content-area">
        <NavbarComponents dashData={userData} />

        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;

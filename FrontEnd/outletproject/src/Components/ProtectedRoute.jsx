import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  let islogged = localStorage.getItem("isLoggedin");
  return islogged == "true" ? <Outlet /> : <Navigate to="/"></Navigate>;
};

export default ProtectedRoute;

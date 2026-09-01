import { useState } from "react";
import "./App.css";
import Home from "./Components/home";
import Dashboard from "./Components/Dashboard";
import About from "./Components/About";
import Login from "./Components/Login";
import Contact from "./Components/Contact";
import Layout from "./Components/Layout";
import Sidebar from "./Components/Sidebar";
import Skills from "./Components/Skills";
import ProtectedRoute from "./Components/ProtectedRoute";
import Settings from "./Components/Settings";
import Registration from "./Components/Registration";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouterContextProvider,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="home" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="skill" element={<Skills />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

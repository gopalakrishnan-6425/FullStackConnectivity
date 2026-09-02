import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [message, setMessage] = useState("");

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setLogin({
      ...login,
      [name]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8086/auth/login",
        login,
      );
      console.log(response);
      navigate("/dashboard", { state: response.data });
      localStorage.setItem("isLoggedin", "true");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="lg-page">
      <h2 className="lg-title">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="lg-form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter email"
            value={login.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="lg-form-group">
          <label htmlFor="password">Password</label>
          <input 
            id="password"
            type="password"
            name="password"
            placeholder="Enter password"
            value={login.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="lg-button">
          Login
        </button>
      </form>
      <div className="lg-footer">
        Don't have an account?{" "}
        <Link to="/register" className="lg-link">
          Register here
        </Link>
      </div>
    </div>
  );
};

export default Login;

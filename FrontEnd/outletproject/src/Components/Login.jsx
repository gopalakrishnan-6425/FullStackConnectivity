import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (login.email == "gopal@gmail.com" && login.password == "Gopal@06") {
      alert("Login successfull..");
      localStorage.setItem("isLoggedin", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  }
  return (
    <>
      <style>{`

        body {
          margin: 0;
          font-family: Arial, sans-serif;
        }

        .login-page {
          height: 100vh;

          display: flex;
          justify-content: center;
          align-items: center;

          background-color: #0499a7;
        }

        .login-box {
           height:350px;
          width: 250px;

          background-color: white;

          padding: 30px;

          border-radius: 10px;

          box-shadow: 0px 5px 20px rgba(0,0,0,0.15);
        }

        .login-box h2 {
          text-align: center;

          margin-bottom: 25px;

          color: #333;
        }

        .form-group {
          margin-bottom: 18px;
        }

        .form-group label {
          display: block;

          margin-bottom: 7px;

          font-weight: bold;

          color: #444;
        }

        .form-group input {
          width: 100%;

          padding: 11px;

          border: 1px solid #ccc;

          border-radius: 5px;

          font-size: 15px;

          box-sizing: border-box;

          outline: none;
        }

        .form-group input:focus {
          border-color: #007bff;
        }

        .login-button {
          width: 100%;

          padding: 12px;

          border: none;

          border-radius: 5px;

          background-color: #007bff;

          color: white;

          font-size: 16px;

          cursor: pointer;
        }

        .login-button:hover {
          background-color: #0056b3;
        }

        .login-text {
          text-align: center;

          margin-top: 20px;

          color: #777;

          font-size: 14px;
        }

      `}</style>
      <div className="login-page">
        <div className="login-box">
          <h2>Login</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={login.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>

              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={login.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="login-button">
              Login
            </button>
          </form>

          <div className="login-text">Welcome! Please login to continue.</div>
          <a href="">Register Now</a>
        </div>
      </div>
    </>
  );
};
export default Login;

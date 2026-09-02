import React, { useState } from "react";
import { useNavigate, Link , useLocation } from "react-router-dom";
import axios from 'axios'
import "./Login.css";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [message,setMessage] = useState("")

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
        try{
            const response = await axios.post("http://localhost:8086/auth/login",login)
            console.log(response)
            navigate("/dashboard",{state:response.data})
            localStorage.setItem("isLoggedin","true")
        }
        catch(error){
           alert(error)
        }
        
    }

    return (
        <div className="login-page">

            {/* Decorative Background Shapes */}
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>

            {/* Login Card */}
            <div className="login-box">

                {/* Logo */}
                <img
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135810.png"
                    alt="Brand Logo"
                    className="brand-logo"
                />

                <h2>Login</h2>

                <form onSubmit={handleSubmit}>

                    {/* Email */}
                    <div className="form-group">
                        <label htmlFor="email">
                            Email
                        </label>

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

                    {/* Password */}
                    <div className="form-group">
                        <label htmlFor="password">
                            Password
                        </label>

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

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="login-button"
                    >
                        Login
                    </button>

                </form>

                {/* Register */}
                <div className="login-text">
                    Don't have an account?
                </div>

                <Link to="/register" className="register-link">
                    Register here
                </Link>

            </div>
        </div>
    );
};

export default Login;
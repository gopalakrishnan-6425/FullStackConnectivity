import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <>
            <style>{`

                .sidebar {
                    position: fixed;
                    top: 0;
                    left: 0;

                    width: 270px;
                    height: 100vh;

                    z-index: 1000;

                    padding: 30px 20px;

                    background: #17181c;

                    overflow-y: auto;
                    overflow-x: hidden;

                    box-sizing: border-box;

                    font-family: "Poppins", sans-serif;
                }

                .sidebar h2 {
                    color: #00b4d8;

                    text-align: center;

                    margin: 0 0 30px 0;

                    font-size: 24px;
                    font-weight: 700;

                    text-shadow:
                        0 0 10px rgba(0, 180, 216, 0.4);
                }

                .sidebar a {
                    display: block;

                    color: #e5e5e5;

                    text-decoration: none;

                    padding: 14px 20px;

                    margin-bottom: 8px;

                    font-size: 16px;
                    font-weight: 500;

                    border-radius: 8px;

                    transition:
                        background 0.3s ease,
                        color 0.3s ease,
                        box-shadow 0.3s ease,
                        transform 0.3s ease;
                }

                .sidebar a:hover {
                    background: rgba(0, 180, 216, 0.15);

                    color: #00b4d8;

                    box-shadow:
                        0 0 12px rgba(0, 180, 216, 0.4);

                    transform: translateX(4px);
                }

                .sidebar a.active {
                    background: rgba(0, 180, 216, 0.2);

                    color: #00b4d8;

                    box-shadow:
                        0 0 12px rgba(0, 180, 216, 0.35);

                    font-weight: 600;
                }

                /* Scrollbar */

                .sidebar::-webkit-scrollbar {
                    width: 5px;
                }

                .sidebar::-webkit-scrollbar-thumb {
                    background: #00b4d8;
                    border-radius: 10px;
                }

                .sidebar::-webkit-scrollbar-track {
                    background: #17181c;
                }

                /* Mobile */

                @media (max-width: 768px) {
                    .sidebar {
                        position: relative;

                        width: 100%;
                        height: auto;

                        padding: 20px;
                    }

                    .sidebar h2 {
                        margin-bottom: 20px;
                    }

                    .sidebar a {
                        padding: 12px 15px;
                    }
                }

            `}</style>

            <div className="sidebar">

                <h2>My Dashboard</h2>

                <NavLink to="/dashboard">
                    🏠 Dashboard
                </NavLink>

                <NavLink to="/dashboard/home">
                    🏠 Home
                </NavLink>

                <NavLink to="/dashboard/about">
                    👨‍🎓 Students
                </NavLink>

                <NavLink to="/dashboard/contact">
                    📚 Contact
                </NavLink>

                <NavLink to="/dashboard/skill">
                    📅 Skills
                </NavLink>

                <NavLink to="/dashboard/settings">
                    ⚙️ Settings
                </NavLink>

            </div>
        </>
    );
};

export default Sidebar;
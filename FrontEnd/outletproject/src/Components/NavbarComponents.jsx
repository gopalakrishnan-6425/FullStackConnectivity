import React from "react";
import { useNavigate } from "react-router-dom";

const NavbarComponents = () => {

    const navigate = useNavigate();

    function handleClick() {
        localStorage.removeItem("isLoggedin");
        navigate("/");
    }

    return (
        <>
            <style>{`

                .navbar {
                    position: fixed;

                    top: 0;
                    left: 270px;

                    width: calc(100% - 270px);
                    height: 65px;

                    z-index: 1000;

                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    padding: 0 25px;

                    box-sizing: border-box;

                    background: linear-gradient(
                        135deg,
                        #4a90e2,
                        #357abd
                    );

                    color: white;

                    font-family: "Poppins", sans-serif;

                    box-shadow:
                        0 4px 15px rgba(0, 0, 0, 0.15);
                }


                /* Dashboard title */

                .navbar-title {
                    flex-shrink: 0;

                    font-size: 22px;
                    font-weight: 700;

                    color: white;

                    white-space: nowrap;
                }


                /* Right side */

                .navbar-right {
                    display: flex;

                    align-items: center;

                    justify-content: flex-end;

                    gap: 18px;

                    min-width: 0;
                }


                /* Welcome text */

                .username {
                    font-size: 14px;

                    font-weight: 500;

                    color: white;

                    white-space: nowrap;
                }


                /* Logout button */

                .logout-btn {
                    flex-shrink: 0;

                    width: 90px;
                    height: 38px;

                    padding: 0;

                    border: none;

                    border-radius: 8px;

                    background: white;

                    color: #357abd;

                    font-family: "Poppins", sans-serif;

                    font-size: 13px;

                    font-weight: 600;

                    cursor: pointer;

                    display: flex;

                    align-items: center;

                    justify-content: center;

                    transition: all 0.25s ease;
                }


                .logout-btn:hover {
                    background: #eef2ff;

                    color: #2563eb;

                    transform: translateY(-2px);

                    box-shadow:
                        0 6px 15px rgba(0, 0, 0, 0.18);
                }


                .logout-btn:active {
                    transform: translateY(0);
                }


                /* Tablet */

                @media (max-width: 900px) {

                    .navbar {
                        padding: 0 18px;
                    }

                    .navbar-title {
                        font-size: 19px;
                    }

                    .username {
                        font-size: 13px;
                    }

                    .navbar-right {
                        gap: 12px;
                    }

                }


                /* Mobile */

                @media (max-width: 768px) {

                    .navbar {
                        left: 0;

                        width: 100%;

                        height: 60px;

                        padding: 0 15px;
                    }

                    .navbar-title {
                        font-size: 18px;
                    }

                    .username {
                        display: none;
                    }

                    .logout-btn {
                        width: 78px;

                        height: 34px;

                        font-size: 12px;
                    }

                }

            `}</style>


            <nav className="navbar">

                <div className="navbar-title">
                    My Dashboard
                </div>


                <div className="navbar-right">

                    <span className="username">
                        Welcome, Gopalakrishnan
                    </span>


                    <button
                        type="button"
                        className="logout-btn"
                        onClick={handleClick}
                    >
                        Logout
                    </button>

                </div>

            </nav>
        </>
    );
};

export default NavbarComponents;
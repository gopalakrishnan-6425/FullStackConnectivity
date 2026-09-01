import React from "react";
import {useNavigate} from "react-router-dom";

const NavbarComponents = () => {
  let useNavi = useNavigate()
   function handleClick(){
     localStorage.removeItem("isLoggedin")
     useNavi("/")
   }
  return (
    <>
      <style>{`

        .navbar {
          height: 60px;

          background-color: #007bff;

          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: 0 25px;

          color: white;

          position: fixed;
          top: 0;
          left: 230px;
          right: 0;

          z-index: 1000;
        }

        .navbar-title {
          font-size: 22px;
          font-weight: bold;
        }

        .navbar-right {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .username {
          font-size: 15px;
        }

        .logout-btn {
          background-color: white;
          color: #007bff;

          border: none;
          border-radius: 5px;

          padding: 8px 15px;

          cursor: pointer;

          font-weight: bold;
        }

        .logout-btn:hover {
          background-color: #f2f2f2;
        }

      `}</style>

      <nav className="navbar">
        <div className="navbar-title">My Dashboard</div>
        <div className="navbar-right">
          <span className="username">Welcome, Gopalakrishnan</span>
          <button className="logout-btn" onClick={handleClick}>
            Logout
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavbarComponents;

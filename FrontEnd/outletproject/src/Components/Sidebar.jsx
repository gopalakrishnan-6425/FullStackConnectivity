import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <style>{`
        .sidebar {
          width: 230px;
          height: 100vh;
          background-color: #222;
          position: fixed;
          left: 0;
          top: 0;
          padding-top: 25px;
        }

        .sidebar h2 {
          color: white;
          text-align: center;
          margin-bottom: 30px;
        }

        .sidebar a {
          display: block;
          color: white;
          text-decoration: none;
          padding: 15px 25px;
          font-size: 16px;
        }

        .sidebar a:hover {
          background-color: #007bff;
        }

        .sidebar a.active {
          background-color: #007bff;
        }
      `}</style>

      <div className="sidebar">

        <h2>My Dashboard</h2>
          <Link to="/dashboard">
          🏠 dashboard
        </Link>

        <Link to="/dashboard/home">
          🏠 Home
        </Link>

        <Link to="/dashboard/about">
          👨‍🎓 about
        </Link>

        <Link to="/dashboard/contact">
          📚 contact
        </Link>

        <Link to="/dashboard/skill">
          📅 skill
        </Link>
        <Link to="/dashboard/settings">
          ⚙️ Settings
        </Link>

      </div>
    </>
  );
};

export default Sidebar;
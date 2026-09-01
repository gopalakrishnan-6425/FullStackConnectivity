
import React from "react";

const Dashboard = () => {
  return (
    <>
      <style>{`

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background-color: #f5f6fa;
        }

        .dashboard {
          min-height: 100vh;
          padding: 30px;
        }

        .dashboard-title {
          margin-bottom: 5px;
          color: #333;
        }

        .dashboard-subtitle {
          color: #777;
          margin-bottom: 30px;
        }

        /* Cards */

        .cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .card {
          background-color: white;
          padding: 25px;
          border-radius: 10px;

          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }

        .card h3 {
          margin: 0;
          color: #666;
          font-size: 16px;
        }

        .card h2 {
          margin: 15px 0 5px;
          font-size: 30px;
          color: #007bff;
        }

        .card p {
          margin: 0;
          color: #999;
          font-size: 13px;
        }

        /* Welcome */

        .welcome {
          background-color: #007bff;
          color: white;

          padding: 30px;

          border-radius: 10px;

          margin-bottom: 25px;
        }

        .welcome h2 {
          margin: 0 0 10px;
        }

        .welcome p {
          margin: 0;
        }

        /* Recent Activity */

        .activity {
          margin-top: 30px;

          background-color: white;

          padding: 25px;

          border-radius: 10px;

          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }

        .activity h2 {
          margin-top: 0;
          color: #333;
        }

        .activity-item {
          padding: 15px 0;

          border-bottom: 1px solid #eee;

          color: #555;
        }

        .activity-item:last-child {
          border-bottom: none;
        }

        /* Responsive */

        @media (max-width: 900px) {

          .cards {
            grid-template-columns: repeat(2, 1fr);
          }

        }

        @media (max-width: 600px) {

          .dashboard {
            padding: 20px;
          }

          .cards {
            grid-template-columns: 1fr;
          }

        }

      `}</style>


      <div className="dashboard">

        {/* Welcome Section */}

        <div className="welcome">

          <h2>Welcome to Dashboard 👋</h2>

          <p>
            Here you can manage your application easily.
          </p>

        </div>


        {/* Dashboard Title */}

        <h1 className="dashboard-title">
          Dashboard
        </h1>

        <p className="dashboard-subtitle">
          Overview of your application
        </p>


        {/* Cards */}

        <div className="cards">

          <div className="card">

            <h3>Total Students</h3>

            <h2>120</h2>

            <p>Students registered</p>

          </div>


          <div className="card">

            <h3>Total Courses</h3>

            <h2>08</h2>

            <p>Available courses</p>

          </div>


          <div className="card">

            <h3>Attendance</h3>

            <h2>92%</h2>

            <p>Average attendance</p>

          </div>


          <div className="card">

            <h3>Total Reports</h3>

            <h2>25</h2>

            <p>Reports generated</p>

          </div>

        </div>


        {/* Recent Activity */}

        <div className="activity">

          <h2>Recent Activity</h2>

          <div className="activity-item">
            New student registered
          </div>

          <div className="activity-item">
            Attendance updated
          </div>

          <div className="activity-item">
            New course added
          </div>

          <div className="activity-item">
            Monthly report generated
          </div>

        </div>

      </div>

    </>
  );
};

export default Dashboard;
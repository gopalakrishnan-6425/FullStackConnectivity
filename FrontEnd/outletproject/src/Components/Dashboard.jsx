import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  
  return (
    <div className="dashboard">
      {/* Background Decorations */}
      <div className="dashboard-shape dashboard-shape-1"></div>
      <div className="dashboard-shape dashboard-shape-2"></div>

      {/* Main Content */}
      <div className="dashboard-content">
        {/* Welcome Section */}
        <section className="welcome">
          <div>
            <p className="welcome-label">WELCOME BACK</p>

            <h2>Welcome to Dashboard 👋</h2>

            <p>Here's what's happening with your application today.</p>
          </div>

          <div className="welcome-icon">👋</div>
        </section>

        {/* Dashboard Header */}
        <div className="dashboard-header">
          <div>
            <h1 className="dashboard-title">Dashboard</h1>

            <p className="dashboard-subtitle">Overview of your application</p>
          </div>

          <div className="dashboard-date">📅 Today</div>
        </div>

        {/* Statistics Cards */}
        <div className="cards">
          {/* Students */}
          <div className="card">
            <div className="card-top">
              <div className="card-icon">👨‍🎓</div>

              <span className="card-status">+12%</span>
            </div>

            <h3>Total Students</h3>

            <h2>120</h2>

            <p>Students registered</p>
          </div>

          {/* Courses */}
          <div className="card">
            <div className="card-top">
              <div className="card-icon">📚</div>

              <span className="card-status">+2</span>
            </div>

            <h3>Total Courses</h3>

            <h2>08</h2>

            <p>Available courses</p>
          </div>

          {/* Attendance */}
          <div className="card">
            <div className="card-top">
              <div className="card-icon">📊</div>

              <span className="card-status">+5%</span>
            </div>

            <h3>Attendance</h3>

            <h2>92%</h2>

            <p>Average attendance</p>
          </div>

          {/* Reports */}
          <div className="card">
            <div className="card-top">
              <div className="card-icon">📄</div>

              <span className="card-status">+4</span>
            </div>

            <h3>Total Reports</h3>

            <h2>25</h2>

            <p>Reports generated</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="dashboard-bottom">
          {/* Recent Activity */}
          <div className="activity">
            <div className="section-header">
              <div>
                <h2>Recent Activity</h2>

                <p>Latest updates from your application</p>
              </div>

              <span className="activity-count">4 Updates</span>
            </div>

            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon">👨‍🎓</div>

                <div className="activity-info">
                  <h4>New student registered</h4>

                  <span>Student registration completed</span>
                </div>

                <span className="activity-time">Just now</span>
              </div>

              <div className="activity-item">
                <div className="activity-icon">📊</div>

                <div className="activity-info">
                  <h4>Attendance updated</h4>

                  <span>Attendance records updated</span>
                </div>

                <span className="activity-time">10 min ago</span>
              </div>

              <div className="activity-item">
                <div className="activity-icon">📚</div>

                <div className="activity-info">
                  <h4>New course added</h4>

                  <span>Course successfully added</span>
                </div>

                <span className="activity-time">1 hour ago</span>
              </div>

              <div className="activity-item">
                <div className="activity-icon">📄</div>

                <div className="activity-info">
                  <h4>Monthly report generated</h4>

                  <span>Monthly report is ready</span>
                </div>

                <span className="activity-time">2 hours ago</span>
              </div>
            </div>
          </div>

          {/* Quick Overview */}
          <div className="overview">
            <h2>Quick Overview</h2>

            <p>Application statistics</p>

            <div className="progress-item">
              <div className="progress-header">
                <span>Student Capacity</span>
                <strong>75%</strong>
              </div>

              <div className="progress">
                <div className="progress-bar" style={{ width: "75%" }}></div>
              </div>
            </div>

            <div className="progress-item">
              <div className="progress-header">
                <span>Course Completion</span>
                <strong>82%</strong>
              </div>

              <div className="progress">
                <div className="progress-bar" style={{ width: "82%" }}></div>
              </div>
            </div>

            <div className="progress-item">
              <div className="progress-header">
                <span>Attendance</span>
                <strong>92%</strong>
              </div>

              <div className="progress">
                <div className="progress-bar" style={{ width: "92%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

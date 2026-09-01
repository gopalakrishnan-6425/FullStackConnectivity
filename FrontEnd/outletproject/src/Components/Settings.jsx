import React from 'react'

const Settings = () => {
  return (
    <>
      <style>{`
        .settings-container {
          width: 100%;
          min-height: 100vh;
          padding: 80px 40px;
          background: linear-gradient(135deg, #f4f6ff, #e8ecf9);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          box-sizing: border-box;
        }

        .settings-container h1, .settings-container div {
          font-size: 32px;
          color: #4a90e2;
          text-align: center;
          margin-bottom: 20px;
          text-shadow: 0 0 8px rgba(74, 144, 226, 0.3);
        }

        .settings-container p {
          font-size: 16px;
          line-height: 1.6;
          color: #333;
          background: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .settings-container {
            padding: 60px 20px;
          }

          .settings-container h1, .settings-container div {
            font-size: 26px;
          }

          .settings-container p {
            font-size: 14px;
          }
        }
      `}</style>

      <div className="settings-container">
        <div>Settings</div>
        <p>Here you can manage your preferences.</p>
      </div>
    </>
  )
}

export default Settings

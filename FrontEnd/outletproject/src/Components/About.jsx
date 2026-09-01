import React from "react";

const About = () => {
    return (
        <>
            <style>{`

                .about-page {
                    width: 100%;
                    min-height: calc(100vh - 65px);

                    padding: 35px;

                    background:
                        linear-gradient(
                            135deg,
                            #f5f7ff 0%,
                            #eef2ff 50%,
                            #f8f7ff 100%
                        );

                    font-family: "Poppins", sans-serif;

                    box-sizing: border-box;
                }

                .about-container {
                    width: 100%;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .about-header {
                    margin-bottom: 30px;
                }

                .about-header h1 {
                    margin: 0 0 8px 0;

                    font-size: 32px;
                    font-weight: 700;

                    color: #17181c;
                }

                .about-header p {
                    margin: 0;

                    font-size: 15px;
                    color: #666;
                }

                .about-card {
                    width: 100%;

                    padding: 30px;

                    background: white;

                    border-radius: 16px;

                    box-shadow:
                        0 8px 25px rgba(0, 0, 0, 0.08);

                    box-sizing: border-box;
                }

                .about-card h2 {
                    margin: 0 0 15px 0;

                    color: #00a3c7;

                    font-size: 24px;
                }

                .about-card p {
                    margin: 0;

                    color: #555;

                    font-size: 15px;
                    line-height: 1.8;
                }

                .about-grid {
                    display: grid;

                    grid-template-columns:
                        repeat(3, minmax(0, 1fr));

                    gap: 20px;

                    margin-top: 25px;
                }

                .about-box {
                    padding: 25px;

                    background: white;

                    border-radius: 14px;

                    box-shadow:
                        0 6px 20px rgba(0, 0, 0, 0.07);

                    transition:
                        transform 0.3s ease,
                        box-shadow 0.3s ease;
                }

                .about-box:hover {
                    transform: translateY(-5px);

                    box-shadow:
                        0 10px 25px rgba(0, 0, 0, 0.12);
                }

                .about-box .icon {
                    font-size: 30px;

                    margin-bottom: 12px;
                }

                .about-box h3 {
                    margin: 0 0 8px 0;

                    font-size: 18px;

                    color: #17181c;
                }

                .about-box p {
                    margin: 0;

                    font-size: 14px;

                    line-height: 1.6;

                    color: #666;
                }

                @media (max-width: 900px) {
                    .about-grid {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 768px) {
                    .about-page {
                        padding: 25px 18px;
                    }

                    .about-header h1 {
                        font-size: 26px;
                    }

                    .about-card {
                        padding: 22px;
                    }
                }

            `}</style>

            <div className="about-page">

                <div className="about-container">

                    <div className="about-header">
                        <h1>About</h1>

                        <p>
                            Learn more about this dashboard application.
                        </p>
                    </div>

                    <div className="about-card">

                        <h2>About My Dashboard</h2>

                        <p>
                            Welcome to My Dashboard. This application is
                            designed to provide a simple and user-friendly
                            interface for managing and viewing important
                            information. The dashboard provides quick access
                            to different sections such as Home, About,
                            Contact, Skills and Settings.
                        </p>

                    </div>

                    <div className="about-grid">

                        <div className="about-box">
                            <div className="icon">🎯</div>

                            <h3>Our Goal</h3>

                            <p>
                                To provide a simple, organized and easy-to-use
                                dashboard experience.
                            </p>
                        </div>

                        <div className="about-box">
                            <div className="icon">💻</div>

                            <h3>Technology</h3>

                            <p>
                                Built using modern web technologies including
                                React.js, JavaScript, HTML and CSS.
                            </p>
                        </div>

                        <div className="about-box">
                            <div className="icon">🚀</div>

                            <h3>Future</h3>

                            <p>
                                The application can be extended with APIs,
                                database integration and authentication.
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </>
    );
};

export default About;
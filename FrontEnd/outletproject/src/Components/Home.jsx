import React from "react";

const Home = () => {
  return (
    <>
      <style>{`
        .home-container {
          width: 100%;
          min-height: 100vh;
          padding: 80px 40px;
          background: linear-gradient(135deg, #e8ecf9, #f4f6ff);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          box-sizing: border-box;
        }

        .home-container h1 {
          font-size: 36px;
          color: #4a90e2;
          text-align: center;
          margin-bottom: 20px;
          text-shadow: 0 0 8px rgba(74, 144, 226, 0.3);
        }

        .home-container p {
          font-size: 16px;
          line-height: 1.6;
          color: #333;
          background: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          text-align: justify;
        }

        @media (max-width: 768px) {
          .home-container {
            padding: 60px 20px;
          }

          .home-container h1 {
            font-size: 28px;
          }

          .home-container p {
            font-size: 14px;
          }
        }
      `}</style>

      <div className="home-container">
        <h1>Home</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
          mollitia error repellendus deserunt corrupti hic. Soluta, quidem animi
          facilis tempora id odit accusantium dolores molestias assumenda
          pariatur nihil suscipit ut praesentium sequi eveniet architecto error
          debitis! Dignissimos magni voluptas dolor quasi quod laboriosam
          provident blanditiis eos rem eaque minima cumque eum doloribus nemo ad
          ab accusamus consequatur explicabo assumenda ipsam sint asperiores
          dolorem, omnis corrupti...
        </p>
      </div>
    </>
  );
};

export default Home;

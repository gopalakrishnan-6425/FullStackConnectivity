import React from 'react'

const Skills = () => {
  return (
    <>
      <style>{`
        .skills-container {
          width: 100%;
          min-height: 100vh;
          padding: 80px 40px;
          background: linear-gradient(135deg, #f4f6ff, #e8ecf9);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          box-sizing: border-box;
        }

        .skills-container h1, .skills-container div {
          font-size: 32px;
          color: #4a90e2;
          text-align: center;
          margin-bottom: 20px;
          text-shadow: 0 0 8px rgba(74, 144, 226, 0.3);
        }

        .skills-container p {
          font-size: 16px;
          line-height: 1.6;
          color: #333;
          background: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          text-align: justify;
          max-width: 800px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .skills-container {
            padding: 60px 20px;
          }

          .skills-container h1, .skills-container div {
            font-size: 26px;
          }

          .skills-container p {
            font-size: 14px;
          }
        }
      `}</style>

      <div className="skills-container">
        <div>Skills</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, culpa
          aliquam alias consequuntur vitae ducimus, laboriosam ab molestiae
          mollitia laborum sint sequi quis nisi id dignissimos necessitatibus
          accusamus totam ad? Consequatur voluptatibus expedita dolorum mollitia
          aut obcaecati sit minus veritatis, animi nesciunt soluta ducimus optio
          magnam maxime cupiditate inventore voluptate voluptatem itaque...
        </p>
      </div>
    </>
  )
}

export default Skills

import React from 'react'

const Contact = () => {
  return (
    <>
      <style>{`
        .contact-container {
          width: 100%;
          min-height: 100vh;
          padding: 80px 40px;
          background: linear-gradient(135deg, #f4f6ff, #e8ecf9);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          box-sizing: border-box;
        }

        .contact-container h1, .contact-container div {
          font-size: 32px;
          color: #4a90e2;
          text-align: center;
          margin-bottom: 20px;
          text-shadow: 0 0 8px rgba(74, 144, 226, 0.3);
        }

        .contact-container p {
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
          .contact-container {
            padding: 60px 20px;
          }

          .contact-container h1, .contact-container div {
            font-size: 26px;
          }

          .contact-container p {
            font-size: 14px;
          }
        }
      `}</style>

      <div className="contact-container">
        <div>Contact</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere placeat quae facilis quisquam enim molestias necessitatibus? Ipsam aspernatur sunt fugit.
        </p>
      </div>
    </>
  )
}

export default Contact;

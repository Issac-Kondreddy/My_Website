import React from 'react';
import '../styles/Home.css'; // Import the updated CSS

const Home = () => {
    return (
      <section id="home" className="home">
        {/* Optional floating shapes */}
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="background-animation">
        <div className="floating-orbs"></div> {/* Floating orbs */}
        <div className="spiral-circle"></div> {/* Spiral circle animation */}
      </div>
        {/* Main content */}
        <div className="home-content">
          <h1>Issac Kondreddy</h1>
          <p>Backend Developer & Data Scientist</p>
          {/* Updated button with down arrow */}
          <a href="#projects" className="cta-btn">View My Work</a>
        </div>
      </section>
    );
  };
  
  export default Home;
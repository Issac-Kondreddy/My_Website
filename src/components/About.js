import React from 'react';
import profileImage from '../assets/profile.jpg'; // Import your profile image
import '../styles/About.css'; // Import the CSS for About section

const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      {/* Advanced Animated Background */}
      <div className="background-animation">
        <div className="floating-orbs"></div> {/* Floating orbs */}
        <div className="spiral-circle"></div> {/* Spiral circle animation */}
      </div>

      <div className="about-container">
        {/* Profile Picture on the Left */}
        <div className="profile-picture">
          <img src={profileImage} alt="Issac Kondreddy" />
        </div>

        {/* About Me Text in the Middle */}
        <div className="about-content">
  <h2 className="about-heading">Issac Kondreddy</h2>
  <h3 className="about-subheading">Masters in Computer Science | Backend & Data Science Enthusiast</h3>

  <p className="about-description">
    Hello! I'm Issac Kondreddy, a passionate developer with expertise in Machine Learning, AI, Python Development, 
    and Backend Engineering. After completing my Master's in Computer Science from the University of Central Missouri, 
    I've shifted my focus towards backend development and data science, constantly exploring how to combine these fields 
    to create impactful solutions.
  </p>
  <p className="about-description">
    Throughout my journey, I've worked on a range of projects that span Machine Learning, Deep Learning, Quantum Machine Learning, 
    and Backend Development. I'm particularly interested in building systems that integrate computational intelligence with robust backend architectures. 
    I love the challenge of learning new technologies and applying them to solve complex, real-world problems.
  </p>
  <p className="about-description">
    Outside of coding, I enjoy traveling, photography, chess, and badminton—each offering a different kind of mental refreshment and inspiration.
  </p>
</div>


        {/* Vertical Social Media Icons on the Right */}
        <div className="social-media-vertical">
          <a href="https://www.linkedin.com/in/issac-kondreddy" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/issac-kondreddy" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.instagram.com/issac_.36/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://scholar.google.com/citations?user=7WhdH44AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-graduation-cap"></i>
          </a>
          <a href="mailto:issackondreddy@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

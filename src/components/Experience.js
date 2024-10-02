import React from 'react';
import '../styles/Experience.css'; // Custom styles for the experience section
import certificate from '../assets/certifcate.jpeg';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
      <div className="background-animation">
        <div className="floating-orbs"></div> {/* Floating orbs */}
        <div className="spiral-circle"></div> {/* Spiral circle animation */}
      </div>
      <h2 className="experience-heading">Experience</h2>
      <div className="experience-container">
        <div className="experience-item">
          <h3 className="job-title">Research Intern</h3>
          <h4 className="company-name">Mitacs Globallink Research Internship, Canada</h4>
          <span className="experience-dates">July 2022 – October 2022</span>
          <p className="experience-location">Kamloops, BC, Canada</p>
          <p className="mentor">Mentor : Mohammad Tawhid</p>
          <ul className="responsibilities-list">
            <li>Developed a Metaheuristic Algorithm for Breast Cancer Detection using ML techniques, achieving 95% accuracy in diagnosing early-stage cancers, improving diagnostic speed by 30%.</li>
            <li>Analyzed 20 Metaheuristic Algorithms for BEC Optimization, conducting in-depth statistical validation.</li>
            <li>Implemented a Quantum ML Algorithm, boosting classification accuracy to 95%.</li>
          </ul>
          <div className="technologies-used">
            <span className="tech">Python</span>
            <span className="tech">Machine Learning</span>
            <span className="tech">Quantum ML</span>
            <span className="tech">Statistical Analysis</span>
          </div>
          <div className="certificate-container">
            <h4>Internship Certificate</h4>
            <img src={certificate} alt="Internship Certificate" className="certificate-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

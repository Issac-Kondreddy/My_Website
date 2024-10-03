import React from 'react';
import '../styles/ResumeSection.css'; // Import the CSS for the Resume section
import resume1 from '../assets/resume1.pdf'; // Resume 1 file
import resume2 from '../assets/resume2.pdf'; // Resume 2 file

const ResumeSection = () => {
  return (
    <section id="resume" className="resume-section">
      <h2 className="resume-heading">View and Download My Resume</h2>
      <div className="resume-container">
        {/* Resume 1 */}
        <div className="resume-card">
          <h3>Machine Learning Resume</h3>
          <iframe src={resume1} className="resume-preview" title="Resume 1"></iframe>
          <a href={resume1} target="_blank" rel="noopener noreferrer" className="resume-link">Preview</a>
          <a href={resume1} download="IsaacKondreddy_Resume1.pdf" className="download-link">Download</a>
        </div>
        {/* Resume 2 */}
        <div className="resume-card">
          <h3>Backend Software Engineer Resume</h3>
          <iframe src={resume2} className="resume-preview" title="Resume 2"></iframe>
          <a href={resume2} target="_blank" rel="noopener noreferrer" className="resume-link">Preview</a>
          <a href={resume2} download="IsaacKondreddy_Resume2.pdf" className="download-link">Download</a>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;

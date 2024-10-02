import React from 'react';
import '../styles/skillsRotating.css'; // Import the updated CSS
import { FaPython, FaDocker, FaGitAlt, FaLock, FaCogs } from 'react-icons/fa'; // Icons
import { SiC, SiDjango, SiPostgresql, SiMysql, SiTensorflow,SiQiskit, SiKeras, SiPandas, SiR,SiJenkins, SiPostman, SiNumpy, SiGithubactions,} from 'react-icons/si';
import { BiCodeBlock } from 'react-icons/bi'; // Icon for APIs

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', icon: <FaPython /> },
        { name: 'C', icon: <SiC /> },
        { name: 'R', icon: <SiR /> },
      ],
    },
    {
      category: 'Backend Development',
      skills: [
        { name: 'Django', icon: <SiDjango /> },
        { name: 'RESTful APIs', icon: <BiCodeBlock /> },
        { name: 'JSON APIs', icon: <BiCodeBlock /> },
      ],
    },
    {
      category: 'Databases',
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'MySQL', icon: <SiMysql /> },
      ],
    },
    {
      category: 'Machine Learning & AI',
      skills: [
        { name: 'TensorFlow', icon: <SiTensorflow /> },
        { name: 'Keras', icon: <SiKeras /> },
        { name: 'Pandas', icon: <SiPandas /> },
        { name: 'NumPy', icon: <SiNumpy /> },
        {name: 'Qiskit', icon:<SiQiskit />},
        {name: 'Image Processing', icon: <SiTensorflow /> }, 
      ],
    },
    {
      category: 'Version Control',
      skills: [
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'GitHub', icon: <FaGitAlt /> },
      ],
    },
    {
      category: 'CI/CD Tools',
      skills: [
        { name: 'Docker', icon: <FaDocker /> },
        { name: 'Jenkins', icon: <SiJenkins /> },
        { name: 'Postman', icon: <SiPostman /> },
        { name: 'GitHub Actions', icon: <SiGithubactions /> },
      ],
    },
    {
      category: 'Web Security & Testing',
      skills: [
        { name: 'JWT & OAuth', icon: <FaLock /> },
        { name: 'Unit Testing', icon: <FaCogs /> },
        { name: 'Integration Testing', icon: <FaCogs /> },
      ],
    },
  ];

  return (
    <section id="skills-hover" className="skills-hover-section">
      {/* Floating shapes for background animation */}
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>

        <div className="floating-orbs"></div> {/* Floating orbs */}
        <div className="spiral-circle"></div> {/* Spiral circle animation */}
      <h2 className="skills-heading">Skills & Expertise</h2>
      <div className="skills-hover-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-card">
            <h3 className="category-name">{category.category}</h3>
            <div className="circle-container">
              {category.skills.map((skill, i) => (
                <div key={i} className="rotating-circle-container">
                  <div className="rotating-circle">
                    <span className="skill-icon">{skill.icon}</span>
                  </div>
                  <h4 className="skill-name">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
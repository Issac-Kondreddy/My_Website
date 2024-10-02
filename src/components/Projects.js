import React from 'react';
import '../styles/Projects.css'; // Custom styles for the Projects section
import project1Image from '../assets/project1Image.png'; // Example project image
import project2Image from '../assets/project2Image.png';
import project3Image from '../assets/project3.jpg';
import project4Image from '../assets/project4.jpg';
import project5Image from '../assets/project5.jpg';
import project6Image from '../assets/PROJECT6.png';

const Projects = () => {
  const projectsData = [
    {
      category: 'Data Science Projects',
      projects: [
        {
          title: 'Traffic Signal Detection with YOLO Algorithm',
          description:
            'Designed a YOLO-based system for real-time traffic signal detection, trained on 5,000+ images, reducing congestion by 20%. Achieved 80% prediction accuracy using Python, OpenCV, and TensorFlow.',
          techStack: ['Machine Learning', 'Deep Learning', 'Python', 'OpenCV', 'TensorFlow'],
          image: project1Image, // Replace with actual image
        },
        {
          title: 'Quantum Learning for Alzheimer’s Disease Classification',
          description:
            'Developed a Quantum Based Deep Learning Model for Alzheimers Disease Classification based on Feature Selection using Quantum CNN and Classiciation using VGGNET',
          techStack: ['Quantum ML', 'Qiskit'],
          image: project2Image, 
        },
        {
          title: 'Hybrid Deep Learning & Quantum Model for ECG Classification',
          description:
            'Developed a Quantum CNN for ECG signal classification with 50,000 samples, achieving 95% accuracy in cardiac arrhythmia diagnosis.',
          techStack: ['DL', 'Quantum Computing', 'TensorFlow', 'Qiskit', 'PennyLane'],
          image: project3Image,
        },
        {
          title: 'Metaheuristic Algorithms and CNN for Alzheimer’s Prediction',
          description:
            'Analyzed 20 metaheuristic algorithms on benchmark functions like Ackley, Sphere, Rastrigin, and Rosenbrock, integrating top-performing MAs with a CNN for Alzheimer’s prediction.',
          techStack: ['Metaheuristic Algorithms', 'Python', 'CNN', 'Benchmarking'],
          githubLink: 'https://github.com/Issac-Kondreddy/Alzheimers_Prediction',
          image: project4Image,
        },
      ],
    },
    {
      category: 'Backend Development Projects',
      projects: [
        {
          title: 'Task Management Application',
          description: `
            A fully-featured task management app designed to handle tasks for users. It provides seamless task 
            creation, editing, deletion, and management functionalities, combined with user authentication and 
            role management. The project is built using Django for the backend, offering comprehensive API 
            integration for smooth operations.
          `,
          features: [
            "User Authentication: Sign up, login, logout functionality with session management.",
            "Task Management: Create, edit, and delete tasks. Assign statuses and filter tasks by their status.",
            "API Integration: REST APIs for task management and user authentication, offering endpoints for operations.",
            "Database Integration: PostgreSQL for secure and scalable data management."
          ],
          techStack: ['Django', 'PostgreSQL', 'REST APIs', 'JWT', 'AWS'],
          githubLink: 'https://github.com/Issac-Kondreddy/TaskManagementApp',
          image: project5Image,
        },
        {
            title: 'Server Monitoring Dashboard',
            description: `
              The Server Monitoring Dashboard is a web application built using Django and Docker that provides real-time 
              monitoring of server metrics such as CPU usage, memory, disk usage, and network activity. It helps system 
              administrators and developers track server health and performance efficiently.
            `,
            features: [
              "Real-time monitoring of CPU usage, memory, disk usage, and network speed.",
              "User-friendly interface with a modern design for easy navigation.",
              "Dockerized deployment for scalability and easy setup.",
              "Customizable alerts and notifications for important metrics."
            ],
            techStack: ['Django', 'Docker', 'AWS EC2', 'Jenkins'],
            githubLink: 'https://github.com/Issac-Kondreddy/Server_Monitoring_Dashboard',
            liveDemoLink: 'http://18.191.148.202/dashboard/',
          image: project6Image, // Replace with actual image
        },
      ],
    },
  ];

  return (
    <section id="projects" className="projects-section">
    <h2 className="projects-heading">Projects</h2>
    {projectsData.map((categoryData, index) => (
      <div key={index} className="project-category">
        <h3 className="category-name">{categoryData.category}</h3>
        <div className="projects-container">
          {categoryData.projects.map((project, i) => (
            <div key={i} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              {/* Features List */}
              {project.features && (
                <ul className="project-features">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              )}

              <div className="tech-stack">
                {project.techStack.map((tech, j) => (
                  <span key={j} className="tech">{tech}</span>
                ))}
              </div>

              {/* GitHub and Live Demo Links */}
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  GitHub
                </a>
              )}
              {project.liveDemoLink && (
                <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  Live Demo
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    ))}
  </section>
  );
};

export default Projects;

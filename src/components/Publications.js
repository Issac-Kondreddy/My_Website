import React from 'react';
import '../styles/Publications.css'; // Custom CSS for Publications

const Publications = () => {
  const publicationsList = [
    {
      title: 'Investigation on Enhancing the Binary Classification Accuracy of Supervised Classifiers Using Various Transform',
      authors: 'Kondreddy, I., et al.',
      venue: 'Journal of Applied Science',
      year: '2021',
      link: 'https://iopscience.iop.org/article/10.1088/1757-899X/1084/1/012032/meta',
    },
    {
      title: 'Feature Selection Using Elephant Herding Optimization Hybridized with Grey Wolf Optimization for Anomaly Detection in Wafer Manufacturing',
      authors: 'Kondreddy, I.',
      venue: 'Proceedings of the International Conference on Advanced Computational and Communication Paradigms',
      year: '2021',
      link: 'https://link.springer.com/chapter/10.1007/978-981-16-4369-9_50',
    },
    {
      title: 'A Study on Real World Implementation and Future Trends of Internet of Things',
      authors: 'Kondreddy, I.',
      venue: 'IEEE Xplore',
      year: '2021',
      link: 'https://ieeexplore.ieee.org/abstract/document/9243551',
    },
    {
      title: 'Improving the Performance Metrics of Binary Classification Models with Different Transforms',
      authors: 'Kondreddy, I.',
      venue: 'International Research Journal of Engineering and Technology',
      year: '2021',
      link: 'https://www.irjet.net/archives/V8/i6/IRJET-V8I6112.pdf',
    },
    {
      title: 'Anomaly Detection Using Supervised Classifiers Combined with Feature Clustering Techniques',
      authors: 'Kondreddy, I.',
      venue: 'International Conference on Neural and Advanced Technologies',
      year: '2021',
    },
    {
      title: 'Quanvolution Neural Network to Recognize Arrhythmia from 2D Scaleogram Features of ECG Signals',
      authors: 'Kondreddy, I.',
      venue: 'IEEE Xplore',
      year: '2022',
      link: 'https://ieeexplore.ieee.org/abstract/document/9744224',
    },
    {
      title: 'A Review: The Success of Tesla from 2003 to 2022',
      authors: 'Kondreddy, I.',
      venue: 'International Research Journal of Engineering and Technology',
      year: '2022',
      link: 'https://www.irjet.net/archives/V9/i4/IRJET-V9I4345.pdf',
    },
    {
      title: 'Leveraging Quantum Feature Extraction and Transfer Learning for Alzheimer’s Disease Diagnosis and Classification',
      authors: 'Kondreddy, I.',
      venue: 'International Conference on the Science of Science and Technological Advances',
      year: '2023',
    },
  ];

  return (
    <section id="publications" className="publications-section">
      <div className="floating-orbs"></div> {/* Floating orbs */}
      <div className="spiral-circle"></div> {/* Spiral circle */}
      
      <h2 className="publications-heading">Publications</h2>
      
      <div className="publications-container">
        {publicationsList.map((publication, index) => (
          <div key={index} className="publication-item">
            <h3 className="publication-title">
              {publication.authors}. <span>”{publication.title}”</span>
            </h3>
            <p className="publication-venue">
              {publication.venue}, {publication.year}.
            </p>
            {publication.link && (
              <a
                href={publication.link}
                className="publication-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Publication
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;

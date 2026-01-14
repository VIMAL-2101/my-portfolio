import { Link } from 'react-router-dom';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Civic Issue Reporting & Tracking Application',
      description: 'A comprehensive platform for citizens to report and track civic issues in their community. Features real-time tracking, status updates, and administrative dashboard.',
      icon: '🏙️',
      tech: ['React', 'Node.js', 'MongoDB', 'Express','https://infosys-cleanstreet.vercel.app/'],
      
    },
    {
      title: 'Blockchain Automated Compliance & Audit System',
      description: 'An innovative blockchain-based solution for automated compliance verification and audit trail management. Ensures transparency and immutability of audit records.',
      icon: ['🔗'],
      tech: ['Python', 'Blockchain', 'Smart Contracts', 'Flask' , '**ONGOING**' ],
    },
  ];

  return (
    <section className="projects">
      <div className="projects-container">
        <h2 className="section-title">My <span className="gradient-text">Projects</span></h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <span className="project-icon">{project.icon}</span>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { Italic } from 'lucide-react';
import '../styles/Certifications.css';

const Certifications = () => {
  return (
    <section className="certifications">
      <div className="certifications-container">
        <h2 className="section-title">My <span className="gradient-text">Certifications</span></h2>
        <div className="certifications-grid">
          <div className="certification-card">
            <div className="certification-ribbon">Verified</div>
            <div className="certification-badge">
              <span className="certification-badge-icon">🏆</span>
            </div>
            <h3 className="certification-title">Infosys Internship 6.0</h3>
            <p className="certification-issuer">Infosys Springboard(3 Months)</p>
            <p className="certification-date">2025</p>
            <p className="certification-description">
              In the Infosys CleanStreet project, 
              I designed and developed a functional web application aimed at improving community issue reporting and management. 
              The <span className="gradient-text">CleanStreet platform</span> enables users to report local concerns and supports efficient tracking and resolution workflows. 
              I contributed to building responsive user interfaces and implementing backend logic to ensure reliable system performance. I integrated database operations to handle data efficiently and support key application features.
               I collaborated with team members to follow structured development practices and successfully deliver the project, strengthening my programming skills and gaining practical full-stack development experience.            
            </p>
            <div className="certification-skills">
              <span className="skill-tag">Software Development</span>
              <span className="skill-tag">Team Leadership</span>
              <span className="skill-tag">Cross-Functional Collaboration</span>
              <span className="skill-tag">Agile Methodologies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

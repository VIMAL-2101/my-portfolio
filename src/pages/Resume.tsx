import '../styles/Resume.css';

const Resume = () => {
  return (
    <section className="resume">
      <div className="resume-container">
        <h2 className="section-title">My <span className="gradient-text">Resume</span></h2>
        <div className="resume-content">
          <div className="resume-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10,9 9,9 8,9"/></svg>
          </div>
          <h3 className="resume-title">Download My Resume(NOT CURRENTLY UPLOADED)</h3>
          <p className="resume-description">
            Get a comprehensive overview of my skills, experience, projects, and educational background. 
            Feel free to download and review my resume.
          </p>
          <div className="resume-buttons">
            <button className="resume-btn primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download Resume
            </button>
            <button className="resume-btn secondary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              View Online
            </button>
          </div>
        </div>
        <div className="upload-section">
          <label className="upload-label">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17,8 12,3 7,8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            <span className="upload-text">Upload your resume here</span>
            <span className="upload-hint">PDF, DOC, or DOCX (Max 5MB)</span>
          </label>
        </div>
      </div>
    </section>
  );
};

export default Resume;

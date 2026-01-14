import '../styles/Education.css';

const Education = () => {
  return (
    <section className="education">
      <div className="education-container">
        <h2 className="section-title">My <span className="gradient-text">Education</span></h2>
        <div className="education-timeline">
          <div className="education-item">
            <div className="education-card">
              <span className="education-year">2022 - 2026</span>
              <h3 className="education-degree">Bachelor of Engineering</h3>
              <p className="education-field">Computer Science and Engineering</p>
              <div className="education-institution">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
                <span>Sona College of Technology, Salem</span>
              </div>
              <p className="education-description">
                I am a Computer Science Engineering student and an aspiring professional programmer dedicated to developing high-quality software solutions through clean code and problem-solving.ta structures, algorithms, and modern development frameworks.
              </p>
              <div className="education-highlights">
                <span className="highlight-tag">Python Development</span>
                <span className="highlight-tag">Backend Engineering</span>
                <span className="highlight-tag">Frontend Engineering</span>
                <span className="highlight-tag">Full Stack Development</span>
                <span className="highlight-tag">Web Engineering</span>
                <span className="highlight-tag">Clean Code</span>
                <span className="highlight-tag">Problem Solving</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

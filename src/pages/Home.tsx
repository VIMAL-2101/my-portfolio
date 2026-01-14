import { Link } from 'react-router-dom';
import '../styles/global.css';
import '../styles/Home.css';

const Home = () => {
  return (
    <section className="home">
      <div className="home-container">
        <div className="home-content">
          <p className="home-greeting">Hello, I'm</p>
          <h1 className="home-name">
            <span className="gradient-text">Vimal Vidyadhaaran</span>
          </h1>
          <p className="home-title">BE CSE Student | Developer | Tech Enthusiast</p>
          <p className="home-description">
            I am a Computer Science student with a strong interest in Python-based software development. 
            I build backend applications, automation scripts, and data-driven solutions using Python. 
            I have experience working with frameworks and databases to develop scalable systems. 
            I continuously improve my skills in algorithms, problem-solving, and clean code practices. 
            My goal is to become a proficient software developer specializing in Python technologies.
          </p>
          <div className="home-buttons">
            <Link to="/projects" className="btn btn-primary">View Projects</Link>
            <Link to="/contact" className="btn btn-outline">Contact Me</Link>
          </div>
          <div className="home-social">
            <a href="https://github.com/VIMAL-2101" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/vimal-vidyadhaaran-229622255" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>
        <div className="home-image">
          <div className="image-wrapper">
            {/* <div className="placeholder-image">V</div> */}
            <img src="data:image/png;base64,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" alt="Vimal Vidyadhaaran" className="profile-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

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
            <img src="/public/user.png" alt="Vimal Vidyadhaaran" className="profile-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

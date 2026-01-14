import '../styles/About.css';

const About = () => {
  const traits = [
    { icon: '🎯', title: 'Goal-Oriented', description: 'Focused on achieving excellence in everything I do' },
    { icon: '💡', title: 'Innovative', description: 'Always thinking of creative solutions to problems' },
    { icon: '🤝', title: 'Team Player', description: 'Collaborative mindset with strong communication skills' },
    { icon: '📚', title: 'Quick Learner', description: 'Adaptable and eager to learn new technologies' },
    { icon: '⚡', title: 'Hardworking', description: 'Dedicated to putting in the effort required for success' },
    { icon: '🌟', title: 'Positive Attitude', description: 'Optimistic approach to challenges and opportunities' },
  ];

  return (
    <section className="about">
      <div className="about-container">
        <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
        <div className="about-content">
          <div className="about-image-section">
            <div className="about-image-wrapper">
              <div className="about-placeholder-image">V</div>
            </div>
          </div>
          <div className="about-text-section">
            <p className="about-subtitle">Who I Am</p>
            <h3 className="about-heading"> A Passionate Developer </h3>
            <div style={{ textAlign: "center" }}>
  <img
    src="https://readme-typing-svg.herokuapp.com?size=28&pause=900&color=38BDF8&center=true&vCenter=true&width=900&lines=Programmer+and+Software+Developer;Python+Backend+%7C+Full+Stack+Development;Java+%7C+Spring+Boot+%7C+React;Problem+Solver+and+Code+Enthusiast;Always+Learning+New+Technologies!"
    alt="Typing SVG"
  />
</div>

            <div className="traits-grid">
              {traits.map((trait, index) => (
                <div key={index} className="trait-card">
                  <div className="trait-icon">{trait.icon}</div>
                  <h4 className="trait-title">{trait.title}</h4>
                  <p className="trait-description">{trait.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

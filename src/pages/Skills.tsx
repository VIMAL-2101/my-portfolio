import '../styles/Skills.css';

const Skills = () => {
  const skills = [
    { name: 'Python', level: 90, icon: '🐍' },
    { name: 'Java', level: 65, icon: '☕' },
    { name: 'C', level: 80, icon: '⚙️' },
    { name: 'HTML/CSS/JS', level: 90, icon: '🌐' },
    { name: 'React', level: 85, icon: '⚛️' },
    { name: 'MySQL', level: 80, icon: '🗄️' },
    { name: 'MongoDB', level: 75, icon: '🍃' },
    { name: 'Blockchain', level: 70, icon: '🔗' },
    { name: 'Flask', level: 75, icon: '🧪' },
  ];

  return (
    <section className="skills">
      <div className="skills-container">
        <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                <span style={{ fontSize: '2rem' }}>{skill.icon}</span>
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-level">{skill.level}% Proficiency</p>
              <div className="skill-progress">
                <div className="skill-progress-bar" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

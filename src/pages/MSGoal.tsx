import '../styles/MSGoal.css';

const MSGoal = () => {
  const goals = [
    { number: 1, title: 'Complete B.E.', description: 'Graduate with excellence from Sona College of Technology' },
    { number: 2, title: 'Gain Experience', description: 'Build industry experience through internships and projects' },
    { number: 3, title: 'MS Preparation', description: 'Prepare for GRE, IELTS, and university applications' },
    { number: 4, title: 'Pursue MS', description: 'Join a top university for Masters in Computer Science' },
  ];

  return (
    <section className="msgoal">
      <div className="msgoal-container">
        <h2 className="section-title">My <span className="gradient-text">MS Goal</span></h2>
        <div className="msgoal-content">
          <div className="msgoal-vision">
            <div className="vision-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            <h3 className="vision-year">2027</h3>
            <h4 className="vision-title">Master's Degree in Computer Science</h4>
            <p className="vision-description">
              My goal is to pursue a Master's degree in Computer Science from a prestigious university by 2027. 
              I aim to specialize in Artificial Intelligence and Machine Learning, contributing to cutting-edge 
              research and innovation that can make a positive impact on society.
            </p>
          </div>

          <div className="goal-timeline">
            <div className="timeline-point">
              <div className="timeline-year past">2025</div>
              <span className="timeline-label">Current</span>
            </div>
            <div className="timeline-connector"></div>
            <div className="timeline-point">
              <div className="timeline-year future">2026</div>
              <span className="timeline-label">Graduate</span>
            </div>
            <div className="timeline-connector"></div>
            <div className="timeline-point">
              <div className="timeline-year future">2026</div>
              <span className="timeline-label">Apply</span>
            </div>
            <div className="timeline-connector"></div>
            <div className="timeline-point">
              <div className="timeline-year target">2027</div>
              <span className="timeline-label">MS Start</span>
            </div>
          </div>

          <div className="goals-grid">
            {goals.map((goal) => (
              <div key={goal.number} className="goal-card">
                <div className="goal-number">{goal.number}</div>
                <h4 className="goal-title">{goal.title}</h4>
                <p className="goal-description">{goal.description}</p>
              </div>
            ))}
          </div>

          <div className="motivation-quote">
            <p className="quote-text">“No matter what we breed we are still made of greed”</p>
            <p className="quote-author">― Imagine Dragons</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MSGoal;

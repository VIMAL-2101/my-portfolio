import '../styles/Snow.css';

const SnowBackground = () => {
  const snowflakes = Array.from({ length: 30 }, (_, i) => (
    <div key={i} className="snowflake">❄</div>
  ));

  return <div className="snow-container">{snowflakes}</div>;
};

export default SnowBackground;

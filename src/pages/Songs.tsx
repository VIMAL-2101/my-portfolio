import '../styles/Songs.css';

const Songs = () => {
  const artists = [
    { name: 'Justin Bieber', genre: 'Pop', songs: 'Baby, Sorry, Peaches', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400' },
    { name: 'Imagine Dragons', genre: 'Alternative Rock', songs: 'Believer, Radioactive, Thunder', image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400' },
    { name: 'One Direction', genre: 'Pop', songs: 'What Makes You Beautiful, Story of My Life', image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400' },
    { name: 'Maroon 5', genre: 'Pop Rock', songs: 'Sugar, Payphone, Memories', image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400' },
    { name: 'Sabrina Carpenter', genre: 'Pop', songs: 'Espresso, Please Please Please', image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400' },
    { name: 'Dua Lipa', genre: 'Pop/Dance', songs: 'Levitating, Don\'t Start Now', image: 'https://images.unsplash.com/photo-1497911270199-1c552ee64aa4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbmNlcnR8ZW58MHx8MHx8fDA%3D' },
    { name: 'Taylor Swift', genre: 'Pop/Country', songs: 'Shake It Off, Love Story, Anti-Hero', image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D' },
  ];

  return (
    <section className="songs">
      <div className="songs-container">
        <h2 className="section-title">Favorite <span className="gradient-text">Artists</span></h2>
        <div className="songs-intro">
          <p>Music is my escape. Here are some of my favorite artists that keep me motivated!</p>
        </div>
        <div className="artists-grid">
          {artists.map((artist, index) => (
            <div key={index} className="artist-card">
              <div className="artist-image">
                <img src={artist.image} alt={artist.name} />
                <div className="artist-overlay">
                  <div className="play-btn">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
              </div>
              <div className="artist-content">
                <h3 className="artist-name">{artist.name}</h3>
                <p className="artist-genre">{artist.genre}</p>
                <p className="artist-songs">{artist.songs}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Songs;

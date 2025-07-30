
import { useState, useRef, useEffect } from 'react';
import Lyrics from './lyric/Lyric';
import './App.css';
import music from'../public/next-to-me.mp3'

function App() {
  const audioRef = useRef(null);
  const [startSlideshow, setStartSlideshow] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio(music);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;
    audioRef.current.muted = false;
  }, []);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 19;
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setStartSlideshow(true);
        })
        .catch((error) => {
          console.error('Audio play failed:', error);
          alert('Unable to play audio. Please interact with the page or check your browser settings.');
        });
    }
  };

  return (
    <div className="app">
      <h1 className="title">for my angrylove ❤️</h1>
      <div className="image-wrapper">
        <button className="play-button" onClick={handlePlay}>▶️ Play Song</button>
        {isPlaying && <p className="playing-indicator">🎵 Now Playing!</p>}
        {startSlideshow && <Lyrics />}
      </div>
    </div>
  );
}

export default App;

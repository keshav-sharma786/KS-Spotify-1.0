import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faForwardStep,
  faBackwardStep,
  faPlayCircle,
  faPauseCircle,
} from "@fortawesome/free-solid-svg-icons";

import arijit02 from "./images/arijit02.jpg";
import arijit03 from "./images/arijit03.jpg";
import arijit04 from "./images/arijit04.jpg";
import arijit05 from "./images/arijit05.jpg";
import playing from "./images/playing.gif";
import logo2 from "./images/logo2.jpg";
import phirKabhi from "./songs/phirKabhi.mp3";
import shayaraana from "./songs/shayaraana.mp4";
import sawan from "./songs/sawan.mp3";
import sunRaha from "./songs/sunRaha.mp3";

import "./index.css";

const songs = [
  { title: "Phir Kabhi", duration: "05:34", src: phirKabhi, img: arijit02 },
  { title: "Shayaraana", duration: "06:34", src: shayaraana, img: arijit03 },
  { title: "Sawan Ayaa", duration: "05:34", src: sawan, img: arijit04 },
  { title: "Sun Raha hai", duration: "05:34", src: sunRaha, img: arijit05 },
];

function App() {
  const audioRef = useRef(new Audio());
  const progressRef = useRef(null);
  const gifRef = useRef(null);
  // at first no song is first selected initially
  const [currentSongIndex, setCurrentSongIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const handlePlayPause = (index) => {
    const selectedSong = songs[index];

    if (currentSongIndex === index) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    } else {
      audioRef.current.src = selectedSong.src;
      audioRef.current.play();
      setCurrentSongIndex(index);
      setIsPlaying(true);
    }
  };

  const updateProgressBar = () => {
    const audio = audioRef.current;
    if (audio && audio.duration) {
      const newProgress = (audio.currentTime / audio.duration) * 100;
      setProgress(newProgress || 0);
    }
  };

  const seek = (e) => {
    const audio = audioRef.current;
    const value = e.target.value;
    audio.currentTime = (value * audio.duration) / 100;
    setProgress(value);
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener("timeupdate", updateProgressBar);
    audio.addEventListener("ended", () => {
      setIsPlaying(false);
    });

    return () => {
      audio.removeEventListener("timeupdate", updateProgressBar);
      audio.removeEventListener("ended", () => {});
    };
  }, []);

  return (
    <>
      <nav>
        <ul>
          <li className="brand">
            <img src={logo2} alt="spotify" />
            KS Spotify
          </li>
          <li>Home</li>
          <li>About</li>
        </ul>
      </nav>

      <div className="container">
        <div className="songList">
          <h2>Best of Arijit - No Copyright Sounds</h2>
          <div className="songItemContainer">
            {songs.map((song, index) => (
              <div className="songItem" key={index}>
                <img src={song.img} alt={song.title} />
                <span>{song.title}</span>
                <span>{song.duration}</span>
                <span className="songListplay">
                  <span className="timestamp">
                    <FontAwesomeIcon
                      icon={
                        currentSongIndex === index && isPlaying
                          ? faPauseCircle
                          : faPlayCircle
                      }
                      size="2x"
                      onClick={() => handlePlayPause(index)}
                    />
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="songBanner"></div>
      </div>

      <div className="bottom">
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={seek}
          ref={progressRef}
          style={{
            width: "80%",
            height: "10px",
            cursor: "pointer",
            accentColor: "#1db954", // optional: Spotify green track color
            borderRadius: "5px",
          }}
        />

        <div className="icons">
          <FontAwesomeIcon icon={faBackwardStep} size="2x" />
          <FontAwesomeIcon
            icon={isPlaying ? faPauseCircle : faPlayCircle}
            size="2x"
            onClick={() => {
              if (currentSongIndex !== null) handlePlayPause(currentSongIndex);
            }}
          />
          <FontAwesomeIcon icon={faForwardStep} size="2x" />
        </div>
        <div className="songInfo">
          <img
            ref={gifRef}
            src={playing}
            alt="playing"
            style={{ opacity: isPlaying ? 1 : 0 }}
          />
          {currentSongIndex !== null
            ? `${songs[currentSongIndex].title} - By Arijit Singh`
            : "No song playing"}
        </div>
      </div>
    </>
  );
}

export default App;

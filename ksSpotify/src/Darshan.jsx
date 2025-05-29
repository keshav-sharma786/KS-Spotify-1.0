import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faForwardStep,
  faBackwardStep,
  faPlayCircle,
  faPauseCircle,
} from "@fortawesome/free-solid-svg-icons";


import darshan from "./images/darshan.jpg";
// import darshan1 from "./images/darshan.png";
import playing from "./images/playing.gif";
import logo2 from "./images/logo2.jpg";


import hawa from "./songs/hawa.mp3";
import { useNavigate } from "react-router-dom";

import "./Darshan.css";

const songs = [
  
  {title: "Hawa Ban Ke", duration: "2:56", src: hawa, img: darshan}
];

function Darshan() {
  const navigate = useNavigate();
  const audioRef = useRef(new Audio());
  const progressRef = useRef(null);
  const gifRef = useRef(null);
  // at first no song is being selected
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
          <li
            onClick={() => {
              navigate("/Home");
            }}
          >
            Home
          </li>
          <li>About</li>
        </ul>
      </nav>

      <div className="container1">
        <div className="songList">
          <h2>Best of Darshan Rawal - No Copyright Sounds</h2>
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
            ? `${songs[currentSongIndex].title} - By Darshan Rawal`
            : "No song playing"}
        </div>
      </div>
    </>
  );
}

export default Darshan;

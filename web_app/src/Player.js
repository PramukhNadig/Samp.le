import React from "react";
import { useState, useRef } from "react";

import ReactPlayer from "react-player";
import playButton from "./images/play-1@2x.png";
import pauseButton from "./images/pause.png";
import speedUpButton from "./images/speed up.png";
import slowDownButton from "./images/slow down.png";

export default function Player() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [played, setPlayed] = useState(0);
    const [hoverProgress, setHoverProgress] = useState(0);
    const [playbackSpeed, setPlaybackSpeed] = useState(1);
    const playerRef = useRef(null);
    const progressBarRef = useRef(null);

    const handleProgress = ({played}) => {
        setPlayed(played);
    }

    const handleClick = (e) => {
        const rect = progressBarRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const clickedValue = x / rect.width;
        playerRef.current.seekTo(clickedValue);
    } 

    const handleMouseMove = (e) => {
        const rect = progressBarRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const hoverValue = x / rect.width;
        setHoverProgress(hoverValue);
      };

    const handleMouseLeave = () => {
        setHoverProgress(0);
    }

    const speedIncrease = () => {
        if(playbackSpeed < 2) {
            setPlaybackSpeed(playbackSpeed + 0.25);
        }
    }

    const speedDecrease = () => {
        if(playbackSpeed > 0.25) {
            setPlaybackSpeed(playbackSpeed - 0.25);
        }
    }

    return(
        <div>
        <div className="media-controls">
            <div className="speed-controls">
                <img className="slow-down" 
                    alt="speed-up" 
                    src={slowDownButton} 
                    onClick={speedDecrease} />
            </div>
            <div className="overlap">
                {isPlaying ? <img
                    className="pause"
                    alt="pause"
                    src={pauseButton}
                    onClick={() => {
                        setIsPlaying(false)
                    }}
                /> : <img
                    className="play"
                    alt="Play"
                    src={playButton}
                    onClick={() => {
                        setIsPlaying(true)
                    }}
                />}
            </div>
            <div className="speed-controls">
                <img className="speed-up" 
                    alt="speed-up" 
                    src={speedUpButton}
                    onClick={speedIncrease} />
            </div>
            </div>
            <div className="media-player-bar" ref={progressBarRef} onClick={handleClick} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                <div
                    className="media-player-bar-progress"
                    style={{ width: `${played * 100}%`, backgroundColor: 'rgba(255, 132, 87, 0.75)' }}
                />
                <div
                    className="media-player-bar-hover"
                    style={{ width: `${hoverProgress * 100}%`, backgroundColor: 'rgba(204, 121, 90, 0.75)' }}
                />
                <span>{playbackSpeed === 1.0 ? "" : "Playback speed: " + playbackSpeed}</span>
            </div>
            <ReactPlayer
                ref={playerRef}
                className="react-player"
                url=""
                playing={isPlaying}
                width="0%"
                height="0%"
                onProgress={handleProgress}
                volume={100}
            />
        </div>
    )
}
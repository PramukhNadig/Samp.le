import React, { useEffect, useState } from "react";

import dividingBar from "./images/dividing-bar-home-1@2x.png";
import helpButton from "./images/help-1@2x.png";
import playButton from "./images/play-1@2x.png";
import statsButton from "./images/stats-1@2x.png";
import pauseButton from "./images/pause.png"

import "./index.css";

export const App = () => {

  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="index">
      <div className="div">
        <div className="wrapper">
          <span className="text-wrapper">SAMP.LE</span>
        </div>
        <img
          className="help"
          alt="Help"
          src={helpButton}
        />
        <img
          className="stats"
          alt="Stats"
          src={statsButton}
        />
        <img
          className="dividing-bar-home"
          alt="Dividing bar home"
          src={dividingBar}
        />
        <div className="entry-container">
          <div className="entry" />
          <div className="entry" />
          <div className="entry" />
          <div className="entry" />
          <div className="entry" />
          <div className="entry" />
          <div className="media-player-bar" />
          <div className="overlap">
            {isPlaying ? <img
                className="play"
                alt="Play"
                src={playButton}
                onClick={() => {
                  setIsPlaying(false)
                }}
              /> : <img
              className="pause"
              alt="pause"
              src={pauseButton}
              onClick={() => {
                setIsPlaying(true)
              }}
            />}
          </div>
          <div className="user-entry" />
          <div className="buttons">
            <button className="input-button">SKIP</button>
            <button className="input-button">SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

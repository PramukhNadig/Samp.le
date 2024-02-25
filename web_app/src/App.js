import React, { useState } from "react";
import StatsModal from "./StatsModal";
import HelpModal from "./HelpModal";

import dividingBar from "./images/dividing-bar-home-1@2x.png";
import helpButton from "./images/help-1@2x.png";
import playButton from "./images/play-1@2x.png";
import statsButton from "./images/stats-1@2x.png";
import pauseButton from "./images/pause.png"

import "./index.css";

function TitleRow() {
  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  
  return(
    <div>
    <div className="wrapper">
      <span className="text-wrapper">SAMP.LE</span>
    </div>
    <img
          className="help"
          alt="Help"
          src={helpButton}
          onClick={() => {
            setIsHelpModalOpen(true);
          }}
        />
        <img
          className="stats"
          alt="Stats"
          src={statsButton}
          onClick={() => {
            setIsStatsModalOpen(true);
          }}
        />
        <img
          className="dividing-bar-home"
          alt="Dividing bar home"
          src={dividingBar}
        />
        <StatsModal
          isStatsModalOpen={isStatsModalOpen}
          setIsStatsModalOpen={setIsStatsModalOpen}/>
        <HelpModal
          isHelpModalOpen={isHelpModalOpen}
          setIsHelpModalOpen={setIsHelpModalOpen}/>
        </div>
  );
}

function EntryContainer() {
  const [isPlaying, setIsPlaying] = useState(false);
  return(
    <div className="entry-container">
          <div className="entry"/>
          <div className="entry"/>
          <div className="entry"/>
          <div className="entry"/>
          <div className="entry"/>
          <div className="entry"/>
          <div className="media-player-bar"/>
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
          <div className="user-entry"/>
          <div className="buttons">
            <button className="input-button">SKIP</button>
            <button className="input-button">SUBMIT</button>
          </div>
        </div>
  );
}

export const App = () => {
  return (
    <div className="index">
      <div className="div">
        <TitleRow/>
        <EntryContainer/>
      </div>
    </div>
  );
};
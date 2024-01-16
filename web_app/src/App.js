import React from "react";
import "./index.css";

export const App = () => {
  return (
    <div className="index">
      <div className="div">
        <p className="SAMP-LE">
          <span className="text-wrapper">SAMP.LE</span>
        </p>
        <img
          className="dividing-bar-home"
          alt="Dividing bar home"
          src="https://cdn.animaapp.com/projects/65a55ad4c2389bf8d304f5bc/releases/65a56103b4a03616a9330fc6/img/dividing-bar-home-1@2x.png"
        />
        <img
          className="help"
          alt="Help"
          src="https://cdn.animaapp.com/projects/65a55ad4c2389bf8d304f5bc/releases/65a56103b4a03616a9330fc6/img/help-1@2x.png"
        />
        <img
          className="stats"
          alt="Stats"
          src="https://cdn.animaapp.com/projects/65a55ad4c2389bf8d304f5bc/releases/65a56103b4a03616a9330fc6/img/stats-1@2x.png"
        />
        <div className="entry" />
        <div className="entry-2" />
        <div className="entry-3" />
        <div className="entry-4" />
        <div className="entry-5" />
        <div className="entry-6" />
        <div className="media-player-bar" />
        <div className="overlap">
          <img
            className="play"
            alt="Play"
            src="https://cdn.animaapp.com/projects/65a55ad4c2389bf8d304f5bc/releases/65a56103b4a03616a9330fc6/img/play-1@2x.png"
          />
        </div>
        <div className="user-entry" />
        <div className="overlap-group">
          <p className="SKIP">
            <span className="span">SKIP</span>
          </p>
        </div>
        <div className="SUBMIT-wrapper">
          <p className="SUBMIT">
            <span className="span">SUBMIT</span>
          </p>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import StatsModal from "./Modals/StatsModal";
import HelpModal from "./Modals/HelpModal";

import dividingBar from "./images/dividing-bar-home-1@2x.png";
import helpButton from "./images/help-1@2x.png";
import statsButton from "./images/stats-1@2x.png";

export default function Header() {
    
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
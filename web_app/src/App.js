import React from "react";

import Header from "./Header";
import Entry from "./Entry";

import "./index.css";

export const App = () => {
  return (
    
    <div className="index">
      <div className="div">
        <Header/>
        <Entry/>
      </div>
    </div>
  );
};
import React from "react";
import { useState } from "react";

import Player from "./Player";

import enterButton from "./images/enter.png"

export default function Entry() {
    const [guesses, setGuesses] = useState(Array(6).fill(""));
    const [curGuess, setCurGuess] = useState(1);
    /*const changeColor = (id) => {
        document.getElementById(id).style.backgroundColor = "rgba(0, 255, 0, 0.85)";
    }*/

    return (
        <div className="entry-container">
            <div className="entry" >
                <span>{guesses[0]}</span>
            </div>
            <div className="entry" >
                <span>{guesses[1]}</span>
            </div><div className="entry" >
                <span>{guesses[2]}</span>
            </div><div className="entry" >
                <span>{guesses[3]}</span>
            </div><div className="entry" >
                <span>{guesses[4]}</span>
            </div><div className="entry" >
                <span>{guesses[5]}</span>
            </div>
            <Player/>
            <div className="user-entry">
                <input
                    className="input"
                    type="text"
                    placeholder="Type Song Name" />
                <img
                    className="submit-entry"
                    src={enterButton}
                    alt="enter-button"></img>
            </div>
        </div>
    );
}
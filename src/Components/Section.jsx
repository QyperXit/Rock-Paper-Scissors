import React from "react";
import { iconPaper, iconRock, iconScissors } from "../assets/index.js";
import "../styles/scoring.css";
import "../styles/section.css";
import Blank from "./Blank.jsx";
import Hand from "./Hand.jsx";
import Rock from "./Rock.jsx";
import Rules from "./Rules.jsx";
import Scissors from "./Scissors.jsx";

const Section = ({ playerChoice, result, computerChoice, resetGame }) => {
  const user = playerChoice.target.getAttribute("name");
  console.log("first", computerChoice);

  const handlePlayAgain = () => {
    resetGame(); // Call the resetGame function passed from the parent
  };

  return (
    <section>
      <div className="house_pick">
        <div className="user_choice">
          <h4 className="user_title">YOU PICKED</h4>
          <div className="user_icons">
            {user === "rock" ? (
              <Rock />
            ) : user === "paper" ? (
              <Hand />
            ) : (
              <Scissors />
            )}
          </div>
        </div>
        {result && (
          <div className="result_box">
            <h1 className="result" value="Incoming">
              {result}
            </h1>
            <button className="play_again" onClick={handlePlayAgain}>
              PLAY AGAIN
            </button>
          </div>
        )}
        <div className="computer_choice">
          <h4 className="computer_title">THE HOUSE PICKED</h4>
          <div className="computer_icons">
            {computerChoice ? (
              computerChoice === "rock" ? (
                <Rock />
              ) : computerChoice === "paper" ? (
                <Hand />
              ) : (
                <Scissors />
              )
            ) : (
              <Blank />
            )}
          </div>
        </div>
      </div>
      {/* <Rules /> */}
    </section>
  );
};

export default Section;

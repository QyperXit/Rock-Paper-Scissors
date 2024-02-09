import React from "react";
import { iconPaper, iconRock, iconScissors } from "../assets/index.js";
import "../styles/main.css";

const Main = ({ onClick }) => {
  return (
    <main>
      <div className="group_icons">
        <div className="hand" name="paper" onClick={onClick}>
          <img src={iconPaper} alt="hand icon" name="paper" />
        </div>
        <div className="scissor" name="scissors" onClick={onClick}>
          <img src={iconScissors} alt=" scisscor icon" name="scissors" />
        </div>
        <div className="rock" name="rock" onClick={onClick}>
          <img src={iconRock} alt=" rock icon" name="rock" />
        </div>
      </div>
    </main>
  );
};

export default Main;

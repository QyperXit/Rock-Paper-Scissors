import React from "react";
import { iconPaper, iconRock, iconScissors } from "../assets/index.js";
import "../styles/main.css";

const Rock = () => {
  return (
    <div className="rock">
      <img src={iconRock} alt=" rock icon" name="rock" className="rockImg" />
    </div>
  );
};

export default Rock;

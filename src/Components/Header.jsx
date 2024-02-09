import React from "react";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="score-container">
      <div className="title_names">
        <div className="rock_title">ROCK</div>
        <div className="paper_title">PAPER</div>
        <div className="scissors_title">SCISSORS</div>
      </div>
      <div className="score_box">
        <h4 className="score_title">SCORE</h4>
        <div className="score_number">11</div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { imageRules } from "../assets/index.js";
import "../styles/main.css";

const Modal = ({ onClick }) => {
  return (
    <dialog open className="modal_box">
      <div className="rules_title">
        <h3>RULES</h3>
        <i className="fa-solid fa-xmark" onClick={onClick}></i>
      </div>
      <img src={imageRules} alt="rules modal" className="modal" />
    </dialog>
  );
};

export default Modal;

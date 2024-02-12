import { motion } from "framer-motion";
import React from "react";

import { iconPaper, iconRock, iconScissors } from "../assets/index.js";
import "../styles/main.css";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.45, // Adjust the duration as needed
    },
  },
};

const Main = ({ onClick }) => {
  return (
    <main>
      <motion.div
        className="group_icons"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="hand"
          name="paper"
          onClick={onClick}
          variants={item}
          whileHover={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          <img src={iconPaper} alt="hand icon" name="paper" />
        </motion.div>
        <motion.div
          className="scissor"
          name="scissors"
          onClick={onClick}
          variants={item}
          whileHover={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          <img src={iconScissors} alt=" scisscor icon" name="scissors" />
        </motion.div>
        <motion.div
          className="rock"
          name="rock"
          onClick={onClick}
          variants={item}
          whileHover={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          <img src={iconRock} alt=" rock icon" name="rock" />
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Main;

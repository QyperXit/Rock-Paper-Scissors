import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Modal from "./Components/Modal";
import Rules from "./Components/Rules";
import Section from "./Components/Section";

function App() {
  const [playerChoice, setPlayerChoice] = useState("");
  const [showMain, setShowMain] = useState(true);
  const [showSection, setShowSection] = useState(false);
  const [result, setResult] = useState(null);
  const [computerChoice, setComputerChoice] = useState(""); // Add state for computerChoice
  const [playerScore, setPlayerScore] = useState(12);
  const [showModal, setShowModal] = useState(false);

  const handleClick = (choice) => {
    setShowMain(false); // Hide the Main component
    const computerChoice = generateComputerChoice();

    setPlayerChoice(choice);

    const userChoice = choice.currentTarget.getAttribute("name");
    setShowSection(true); // Show the Section component after 3 seconds

    setTimeout(() => {
      const computerChoice = generateComputerChoice();
      setComputerChoice(computerChoice);

      // Determine the winner after another 2 seconds
      setTimeout(() => {
        const winner = determineWinner(userChoice, computerChoice);
        setResult(winner); // Set the result

        // Update scores based on the result
        if (winner === "YOU WIN") {
          setPlayerScore(playerScore + 1);
        } else if (winner === "YOU LOSE") {
          setPlayerScore(playerScore - 1);
        }
        // console.log(`Player chose: ${userChoice}`);
        // console.log(`Computer chose: ${computerChoice}`);
        // console.log(`Winner: ${winner}`);
      }, 900);
    }, 800);
  };

  const generateComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    // console.log("test", choices[randomIndex]);
    return choices[randomIndex];
  };

  const determineWinner = (player, computer) => {
    // let user = player.currentTarget.className;
    // console.log("user", user);
    if (
      (player === "rock" && computer === "rock") ||
      (player === "paper" && computer === "paper") ||
      (player === "scissors" && computer === "scissors")
    ) {
      return "ITS A TIE!";
    }

    // Then proceed with normal win conditions
    if (player === "rock" && computer === "scissors") {
      return "YOU WIN";
    } else if (player === "paper" && computer === "rock") {
      return "YOU WIN";
    } else if (player === "scissors" && computer === "paper") {
      return "YOU WIN";
    } else {
      return "YOU LOSE";
    }
  };

  const resetGame = () => {
    setPlayerChoice("");
    setShowMain(true);
    setShowSection(false);
    setResult(null);
    setComputerChoice(""); // Assuming computerChoice is a string
  };

  const handleShowModal = () => {
    setShowModal(!showModal);
    // console.log("yes");
  };

  return (
    <div className="container">
      <Header playerScore={playerScore} />
      {showMain && <Main onClick={handleClick} />}
      {/* <AnimatePresence> */}
      {showSection && (
        <motion.div
          key="section" // Unique key for each instance of Section
          initial={{ opacity: 0, y: -50 }} // Initial animation properties (move up)
          animate={{ opacity: 1, y: 0 }} // Animation properties when appearing
          exit={{ opacity: 0, visibility: "hidden" }} // Animation properties when exiting (move up)
          transition={{ duration: 0.3, exit: { duration: -1 } }} // Transition properties
        >
          <Section
            playerChoice={playerChoice}
            result={result}
            computerChoice={computerChoice}
            resetGame={resetGame}
          />
        </motion.div>
      )}
      {/* </AnimatePresence> */}

      <AnimatePresence>
        {showModal && (
          <motion.div
            key="modal" // Unique key for each instance of Modal
            initial={{ opacity: 0 }} // Initial animation properties
            animate={{ opacity: 1 }} // Animation properties when appearing
            exit={{ opacity: 0, visibility: "hidden" }} // Animation properties when exiting
            transition={{ duration: 0.2 }} // Transition properties
          >
            <Modal onClick={handleShowModal} /> {/* Render Modal component */}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        whileHover={{ opacity: 0.15, ease: "backOut" }}
        whileTap={{ x: 3 }}
        exit={{ opacity: 0, scale: 0 }}
      >
        <Rules onClick={handleShowModal} />
      </motion.div>
    </div>
  );
}

export default App;

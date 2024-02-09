import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Rules from "./Components/Rules";
import Section from "./Components/Section";

function App() {
  const [playerChoice, setPlayerChoice] = useState("");
  const [showMain, setShowMain] = useState(true);
  const [showSection, setShowSection] = useState(false);
  const [result, setResult] = useState(null);
  const [computerChoice, setComputerChoice] = useState(""); // Add state for computerChoice

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
        console.log(`Player chose: ${userChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        console.log(`Winner: ${winner}`);
      }, 2000);
    }, 1000);
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

  return (
    <div className="container">
      <Header />
      {showMain && <Main onClick={handleClick} />}
      {showSection && (
        <Section
          playerChoice={playerChoice}
          result={result}
          computerChoice={computerChoice}
          resetGame={resetGame}
        />
      )}
      {/* <Section /> */}
      <Rules />
    </div>
  );
}

export default App;

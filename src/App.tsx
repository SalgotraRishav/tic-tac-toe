import React, { useState } from "react";
import Block from "./components/Block";
import "./App.css"; // Import CSS for grid styling

function App() {
  const [state, setState] = useState<(string | null)[]>(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState<"X" | "O">("X");

  // Check winner
  const checkWinner = (state: (string | null)[]): string | null => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (state[a] && state[a] === state[b] && state[a] === state[c]) {
        return state[a]; // Return "X" or "O"
      }
    }
    return null; // No winner
  };

  const resetGame = () => {
    setState(Array(9).fill(null));
    setCurrentTurn("X");
  };

  const handleBlockClick = (index: number) => {
    if (state[index] || checkWinner(state)) return; // Block already filled or game over

    const stateCopy = Array.from(state);
    stateCopy[index] = currentTurn;
    setState(stateCopy);

    const winner = checkWinner(stateCopy);

    if (winner) {
      setTimeout(() => {
      alert(`${winner} won the game!`);
      resetGame();
    }, 300); 
    return;    
  }

    setCurrentTurn(currentTurn === "X" ? "O" : "X");
  };

  return (
    <div className="board">
      <div className="row">
        <Block onClick={() => handleBlockClick(0)} value={state[0]} />
        <Block onClick={() => handleBlockClick(1)} value={state[1]} />
        <Block onClick={() => handleBlockClick(2)} value={state[2]} />
      </div>

      <div className="row">
        <Block onClick={() => handleBlockClick(3)} value={state[3]} />
        <Block onClick={() => handleBlockClick(4)} value={state[4]} />
        <Block onClick={() => handleBlockClick(5)} value={state[5]} />
      </div>

      <div className="row">
        <Block onClick={() => handleBlockClick(6)} value={state[6]} />
        <Block onClick={() => handleBlockClick(7)} value={state[7]} />
        <Block onClick={() => handleBlockClick(8)} value={state[8]} />
      </div>
    </div>
  );
}

export default App;

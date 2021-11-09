import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Confetti from 'react-confetti';
import { GameBox } from "./GameBox";

export function Game() {
  const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null]);
  const history = useHistory();

  const decideWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] !== null &&
        board[a] === board[b] &&
        board[a] === board[c]) {
        console.log("Winner", board[a]);
        return board[a]; //if winner ,it return "X" or "O"
      }
    }
    return null; //if no winner 
  };
  const winner = decideWinner(board);
  const pic = "https://cdn4.vectorstock.com/i/thumb-large/21/28/receiving-the-cartoon-achievement-game-screen-vector-24072128.jpg";

  const [isXTurn, setIsXTurn] = useState(true);
  const handleClick = (index) => {
    //if no winner and is untouched then update it
    if (!winner && !board[index]) {
      const boardCopy = [...board];
      boardCopy[index] = isXTurn ? "X" : "O";
      setBoard(boardCopy);
      setIsXTurn(!isXTurn);
    }
  };
  const restart = () => {
    setBoard([null, null, null, null, null, null, null, null, null]);
    setIsXTurn(true);
  };
  return (
    <div className="full-game">
      <h3 className="header">Welcome to TicTacToe</h3>

      <div className="board">
        {board.map((val, index) => (
          <GameBox val={val} onPlayerClick={() => handleClick(index)} />
        ))}

      </div>
      {/* <h1 className="header">Welcome to TicTacToe</h1> */}

      {isXTurn ? <h4>Turn of X</h4> : <h4>Turn of O</h4>}

      {winner ? <div><img className="winner-poster" src={pic} alt={winner} />
        <h2> Winner is {winner}  <Confetti /></h2></div> : " "}
      {/* <button onClick={restart}>RESTART</button> */}

      <div>

        <Button variant="contained" onClick={() => setIsXTurn(true)}>X</Button>
        <Button variant="contained" onClick={() => setIsXTurn(false)}>O</Button>
      </div>
      <Button variant="contained"
        onClick={restart}>
        <RestartAltIcon />
        RESTART</Button>

      <Button variant="contained"
        onClick={() => history.goBack()}
        startIcon={<ArrowBackIosIcon />}>
        BACK</Button>
    </div>
  );
}

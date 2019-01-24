import React, { useState, useEffect } from 'react';
import './square.css';
// import useLogger from 'react-use';
// import Axios from 'axios';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const API = {
  async reportErrors(errors) {
    await sleep(1000);
    alert('LOGS ARE ON SERVER');
  }
};

function useLogger(type) {
  let errorLogs = [];

  function warn(info) {
    return console.warn(info);
  }

  function error(err) {
    console.error(info);

    errorLogs.push(err);
    setTimeout(async () => {
      await API.reportErrors(errorLogs);
      errorLogs = [];
    }, 1000);
  }

  function info(info) {
    return console.info(info);
  }

  return [warn, error, info];
}

export default function GameHooks(props) {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);
  const [warn, error, info] = useLogger('GameHooks');

  function handleClick(i) {
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (squares[i]) {
      error('ERROR ' + squares[i]);
      return;
    }

    squares[i] = xIsNext ? 'X' : 'O';
    setHistory(history.concat([{ squares: squares }]));
    setXIsNext(!xIsNext);
    setStepNumber(history.length);
  }

  function determineWinner() {
    const squares = history;
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  function jumpTo(arrIndex) {
    warn('button was clicked ' + arrIndex);
    setStepNumber(arrIndex);
    setXIsNext(arrIndex % 2 === 0);
  }

  function currentStep() {
    return history.map((step, move) => {
      //   console.log(move);
      const desc = move ? 'Step #' + move : 'Start game';
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{desc}</button>
        </li>
      );
    });
  }

  const winner = determineWinner();

  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  const current = history[stepNumber];

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={i => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ul>{currentStep()}</ul>
      </div>
    </div>
  );
}

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function Board(props) {
  function renderSquare(i) {
    return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />;
  }

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

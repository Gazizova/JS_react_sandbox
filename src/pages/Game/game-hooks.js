import React, { useState, useEffect } from 'react';
import './square.css';
import debounce from 'lodash.debounce';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const API = {
  async reportErrors(errors) {
    await sleep(1000);
    alert('LOGS ARE ON SERVER ' + errors.join(', '));
  }
};

// function debounce(f, ms) {
//   let timer = null;

//   return function(...args) {
//     const onComplete = () => {
//       f.apply(this, args);
//       timer = null;
//     };

//     if (timer) {
//       clearTimeout(timer);
//     }

//     timer = setTimeout(onComplete, ms);
//   };
// }

function throttle(func, ms) {
  var isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {
    if (isThrottled) {
      // (2)
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments); // (1)

    isThrottled = true;

    setTimeout(function() {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

let errorLogs = [];
let warnLogs = [];

async function callApi() {
  await API.reportErrors(errorLogs);
  alert('Sent: ', errorLogs.join(', '));
  errorLogs = [];
}

const throttledCallApi = debounce(callApi, 2000);

function useLogger(info) {
  function warn(info) {
    console.warn(info);
    warnLogs.push(info);

    console.log(warnLogs);
  }

  function error(info) {
    console.error(info);
    errorLogs.push(info);
    throttledCallApi();
    // throttle(
    //   API.reportErrors(errorLogs);
    // , 1000);

    // console.log(errorLogs);
  }

  function info(info) {
    return console.info(info);
  }

  return [warn, error, info];
}

// why can't call?

// function useErrorLogger(inf) {
//   const [error, setErrorLog] = useState([]);

//   function setupWarningLogs(inf) {
//     console.error(inf);
//     setErrorLog(error.concat(inf));
//     setTimeout(async () => {
//       await API.reportErrors(error);
//       setErrorLog = [];
//     }, 1000);

//     console.log(error);
//   }

//   return error;
// }

export default function GameHooks(props) {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);
  // const [warn, setWarnLog] = useState([]);
  const [warn, error, info] = useLogger('GameHooks');

  // function setupWarningLogs(err) {
  //   console.warn(err);
  //   setWarnLog(warn.concat(err));
  //   console.log(warn);
  // }

  // setupWarningLogs(2);

  function handleClick(i) {
    // setTimeout(() => console.log(warn), 3000);

    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (squares[i]) {
      error('ERROR ' + squares[i]);
      // setupWarningLogs('ERROR ' + squares[i]);
      return;
    }
    // setupWarningLogs(squares[i]);

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
  let clickButton = handleClick;

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={i => clickButton(i)} />
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

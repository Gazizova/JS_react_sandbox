import React, { useState, useEffect } from 'react';

var timerID;

export default function Lesson10() {
  const [lapse, setLapse] = useState(0);
  const [running, setRunning] = useState(false);

  function handleRunClick() {
    if (!running) {
      const startTime = Date.now() - lapse;
      timerID = setInterval(() => {
        setLapse(Date.now() - startTime);
      });
      console.log(timerID);
    } else {
      console.log(timerID);
      clearInterval(timerID);
    }
    return setRunning(!running);
  }

  function handleClearClick() {
    clearInterval(timerID);
    console.log(timerID);
    setLapse(0);
    setRunning(false);
  }

  return (
    <div className="lesson">
      <h3> CheckHook:</h3>
      <div style={{ textAlign: 'center' }}>
        <label
          style={{
            fontSize: '2em',
            display: 'block'
          }}
        >
          {lapse}
          ms
        </label>

        <button onClick={handleRunClick}>{running ? 'Stop' : 'Start'}</button>

        <button onClick={handleClearClick}>Clear</button>
      </div>
    </div>
  );
}

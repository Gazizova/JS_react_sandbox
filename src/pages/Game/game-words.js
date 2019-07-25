import React, { useState } from 'react';

function UserInput(props) {
  return (
    <div style={{ flexDirection: 'row' }}>
      <input type="text" onChange={props.onChange} maxLength={1} style={{ maxWidth: '50px' }} />
    </div>
  );
}

function ErorMessage(props) {
  return (
    <div {...props.style}>
      <div style={{ color: 'red' }}>Wrong! Try again</div>
    </div>
  );
}

function HiddenWord(props) {
  return (
    <div>
      <h3>Your word is: </h3>
      <h1>{props.hiddenWord}</h1>
    </div>
  );
}

export default function gameWords() {
  const [hiddenWord, sethiddenWord] = useState([]);
  const [word, setWord] = useState('');
  const [userInput, setUserInput] = useState('');
  const [hideErrorMessage, sethideErrorMessage] = useState(true);

  // select random name
  function startGame() {
    const re = /[\w\d]/gi;
    fetch('https://swapi.co/api/people/?page=1').then(response =>
      response
        .json()
        .then(({ results: items }) => items)
        .then(items => {
          const selectedWord = items[Math.floor(Math.random() * items.length)].name;
          setWord(selectedWord);
          sethiddenWord(selectedWord.split('').map(i => i.replace(re, '*')));
          console.log(selectedWord);
        })
    );
  }

  function onChange(e) {
    sethideErrorMessage(true);
    const inputLetter = e.currentTarget.value;
    const astericsArray = hiddenWord.slice();
    setUserInput(inputLetter);

    if (hiddenWord.includes('*')) {
      if (inputLetter) {
        const hasMatchedLetter = word.toLowerCase().includes(inputLetter.toLowerCase());

        if (hasMatchedLetter) {
          word.split('').forEach((letter, index) => {
            if (letter.toLowerCase() === inputLetter.toLowerCase()) {
              astericsArray[index] = inputLetter;
            }
          });
          sethiddenWord(astericsArray);
          return;
        }

        sethideErrorMessage(false);
      }
    } else {
      console.log('STOP');
      return;
    }
  }
  return (
    <div className="lesson" style={{ display: 'flex', flexDirection: 'column' }}>
      <button onClick={startGame}>Start game</button>
      <HiddenWord hiddenWord={hiddenWord.join('')} />
      <UserInput onChange={onChange} />
      <ErorMessage style={{ hidden: hideErrorMessage }} />
    </div>
  );
}

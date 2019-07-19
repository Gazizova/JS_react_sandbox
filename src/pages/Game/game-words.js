import React, { useState } from 'react';

const words = ['Лисица', 'Зайчик', 'Медведь', 'Кот'];

function UserInput(props) {
  return (
    <div style={{ flexDirection: 'row' }}>
      <input type="text" onChange={props.onChange} maxLength={1} style={{ maxWidth: '50px' }} />
    </div>
  );
}

function HiddenWord(props) {
  return (
    <div>
      <h3>Your word is: </h3>
      <h1>{props.hidden}</h1>
    </div>
  );
}

export default function gameWords() {
  let [hidden, setHidden] = useState('');
  let [word, setWord] = useState('');
  let [userInput, setUserInput] = useState('');

  function startGame() {
    setWord((word = words[Math.floor(Math.random() * words.length)]));
    const re = /[\D]/gi;
    setHidden((hidden = word.replace(re, '*')));
    console.log(word);
  }

  function onChange(e) {
    debugger;
    if (hidden.includes('*')) {
      setUserInput((userInput = e.currentTarget.value));
      let newarr = hidden.split('', hidden.length);
      let arr = [];
      if (userInput) {
        if (word.toLowerCase().includes(userInput.toLowerCase())) {
          for (let i = 0; i < word.length; i++) {
            if (word.toLowerCase()[i] === userInput.toLowerCase()) {
              arr.push(i);
            }
          }
          arr.forEach(i => {
            newarr[i] = userInput;
          });
          setHidden((hidden = newarr.join('')));
        }
      }
    } else {
      console.log('STOP');
      return;
    }
  }

  return (
    <div className="lesson" style={{ display: 'flex', flexDirection: 'column' }}>
      <button onClick={startGame}>Start game</button>
      <HiddenWord hidden={hidden} />
      <UserInput onChange={onChange} />
    </div>
  );
}

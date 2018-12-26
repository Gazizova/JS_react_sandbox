import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Route from './routes';

class App extends Component {
  render() {
    // let popup = window.open('https://github.com/Gazizova', 'Github');
    // popup.postMessage(
    //   "The user is 'bob' and the password is 'secret'",
    //   'https://secure.example.net'
    // );
    // popup.postMessage('hello there!', 'http://example.com');

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <button onClick={() => window.open('https://github.com/Gazizova', 'Github')}>Button</button>

        <Route />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Lesson3 from './lesson3-JSX'
import Lesson4 from './lesson4-ReusableReactProject'
import Lesson5 from './lesson5-PropTypes'
import Lesson6 from './lesson6-conditionalRender'
import Lesson7tick from './lesson7-renderApp'

class App extends Component {

    func(){
    const a = () => (1)

    console.log(a())

    const b = () => { 1 }

    console.log(b())
      }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Lesson3/>
          <Lesson4/>
          <Lesson5 firstName={"string"}/>
          <Lesson6 message = "Hi All"/>
          <Lesson6 />
          <Lesson7tick />
          {/*{setInterval(Lesson7tick, 1000)}*/}
          {this.func()}

      </div>
    );
  }
}

export default App;

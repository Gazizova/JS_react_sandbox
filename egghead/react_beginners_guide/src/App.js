import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Lesson3 from './lesson3-JSX'
import Lesson4 from './lesson4-ReusableReactProject'
import Lesson5 from './lesson5-PropTypes'
import Lesson6 from './lesson6-conditionalRender'
import Lesson7tick from './lesson7-renderApp'
import Lesson9 from './lesson9-eventHandler'
import Lesson10 from './lesson10-componentState'
import Lesson12 from './lesson12-classComponent'
// import Lesson13 from './lesson13-manipulateWithDOM'
import Lesson14 from './lesson14-basicForm'
import Lesson15 from './lesson15-dynamicForm'
import Lesson16 from './lesson16-controllingFormValues'
import Lesson17 from './lesson17-keyProp'

class App extends Component {

    func(){
    const a = (c) => (1, c = 2)
    console.log('a: '+a())
    const b = (c) => {c=1}
    console.log('b: '+b())
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
          <Lesson17/>
          <Lesson16/>
          <Lesson15
              getErrorMessage={value => {
                  if (value.length < 3) {
                      return `Value must be at least 3 characters, but is only ${value.length}`
                  }
                  if (!value.includes('s')) {
                      return `Value does not include "s" but it should!`
                  }
                  return null
              }}/>
          <Lesson14/>
          <Lesson12/>
          <Lesson3 children={"123"}/>
          <Lesson4/>
          <Lesson5 firstName={"string"}/>
          <Lesson6 message = "Hi All"/>
          <Lesson6 />
          <Lesson7tick />
          <Lesson9 start={0} />
          <Lesson10/>

          {this.func()}

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            txt: "this is the state text",
            cat: 0
        }
    }
    update(e){
        this.setState({txt: e.target.value})
    }_
    render() {
      let txt = this.props.txt;
    return (
        // React.createElement('h1', null, "HiHiHI")
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <Widget update ={this.update.bind(this)}/>
          <Widget update ={this.update.bind(this)}/>
          <Widget update ={this.update.bind(this)}/>
         <h1>{this.state.txt}- {this.state.cat}</h1>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
         <Apps2/>
          <Lesson9 />
          <Lesson10 />
      </div>
    );
  }
}

App.propTypes = {
    txt: PropTypes.string,
}

App.defaultProps = {
    txt: "this is  default text"
}
const Widget = (props) =>
    <input type="text" onChange={props.update}/>

// Lesson 7 Access Nested Data with Reacts props.children
class Apps2 extends React.Component {
    render(){
        return <div><Button> <Heart /> React</Button>
            <Title text="thie text is verified"/>
            </div>

    }
}
const Button = (props) => <button>{props.children}</button>

class Heart extends React.Component{
        render(){
           return <span>&#9749;</span>
        }
}
// lesson 8 Add Custom propType Validation to React Components

const Title = (props) => <h1>Title: {props.text}</h1>

Title.propTypes = {
    text(props, propName, component){
        if(!(propName in props)){
            return new Error('missing ${propName}')
        }
        if(props[propName].length <6){
            return new Error(' ${propName} is too short')
        }

    }
}

// lesson 9 Normalize Events with Reacts Synthetic Event System
class Lesson9 extends React.Component {
    constructor(){
        super();
        this.state = {currentEvent: '---'}
        this.update = this.update.bind(this)
    }
    update(e){
        this.setState({currentEvent: e.type})
    }
    render(){
        return (
            <div>
        <textarea
            onKeyPress={this.update}
            onCopy={this.update}
            onCut={this.update}
            onPaste={this.update}
            onFocus={this.update}
            onBlur={this.update}
            onDoubleClick={this.update}
            onTouchStart={this.update}
            onTouchMove={this.update}
            onTouchEnd={this.update}
            cols="30"
            rows="7"/>
                <h1>{this.state.currentEvent}</h1>
            </div>
        )
    }
}
// lesson 10 Use React ref to Get a Reference to Specific Components

class Lesson10 extends React.Component {
    constructor(){
        super();
        this.state = {a: ''}
    }
    update(e){
        this.setState({
            a: this.a.value,
            b: this.refs.b.value
        })
    }
    render(){
        return (
            <div>
                <input
                    ref={node => this.a =node}
                    type="text"
                    onChange={this.update.bind(this)}
                /> {this.state.a}
                <hr />
                    <input
                        ref='b'
                        type="text"
                        onChange={this.update.bind(this)}
                    /> {this.state.b}
            </div>
        )
    }
}

// lesson 11 Understand the React Component Lifecycle Methods
export default App;

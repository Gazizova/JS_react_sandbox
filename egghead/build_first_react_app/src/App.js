import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from "./component/todo";
import {addTodo, generalId} from './lib/todoHelper'

class App extends Component {
    constructor(){
        super()
        this.state = {
            todos:[
                {id: 1, name: 'Learn JSX', isComplete: true},
                {id: 2, name: 'Build an Awesome App', isComplete: false},
                {id: 3, name: 'Ship It', isComplete: false}
            ],
            currentTodo:''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEmptySubmit = this.handleEmptySubmit.bind(this)
   }
   handleInputChange = (event) =>{
        this.setState({
            currentTodo: event.target.value
        })
   }
   handleSubmit =(event)=>{
        event.preventDefault()
        const newId = generalId()
        const newTodo = {id: newId, name: this.state.currentTodo, isComplete: false}
        const updatedTodos = addTodo(this.state.todos, newTodo)
       this.setState({
           todos: updatedTodos,
           currentTodo:'',
           errorMessage:''
       })

   }
    handleEmptySubmit(evt) {
        evt.preventDefault()
        this.setState({
            errorMessage: 'Please supply the todo name'
        })
    }

  render() {
        const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <div className="Todo-App">
              {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}
              <TodoForm handleInputChange={this.handleInputChange}
                        currentTodo={this.state.currentTodo}
                        handleSubmit ={submitHandler}/>

              <TodoList todos={this.state.todos}/>
          </div>
      </div>
    );
  }
}

export default App;

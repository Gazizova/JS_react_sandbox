import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from "./component/todo";
import {addTodo, generalId, findById, toggleTodo, updateTodo, removeTodo} from './lib/todoHelper'
import {pipe, partial} from "./lib/utils";

class App extends Component {

    state = {
            todos:[
                {id: 1, name: 'Learn JSX', isComplete: true},
                {id: 2, name: 'Build an Awesome App', isComplete: false},
                {id: 3, name: 'Ship It', isComplete: false}
            ],
            currentTodo:''
        }

   handleRemove = (id, evt) =>{
        evt.preventDefault()
       const updatedTodos = removeTodo(this.state.todos, id)
       this.setState({ todos: updatedTodos})
   }


   handleInputChange = (event) => {
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
    handleEmptySubmit=(evt)=>{
        evt.preventDefault()
        this.setState({
            errorMessage: 'Please supply the todo name'
        })
    }
    handleToggle = (id) => {
        const getupdatedTodos = pipe(findById, toggleTodo, partial(updateTodo,  this.state.todos));
        const updatedTodos = getupdatedTodos(id, this.state.todos);
        // const todo = findById(id,  this.state.todos)
        // const toggled = toggleTodo(todo)
        // const updatedTodo = updateTodo(this.state.todos, toggled)
        this.setState({todos: updatedTodos})
    }

    Arrays(){

        let a = [33, 4, 1111, 222];
        // const map1 = a.map(x => x * 2);

        function mapR(x) {
            return x*2
        }
        const f =(x, y)=>(x + y)
        // const map1 = a.map((x)=>x*2)

        return a.reduce(f, 10)
        // a.sort((a,b)=>a-b)
        // return a
        // for(let i=0; i<10; i++){
        //     a[i]= 1;
        //     for (const j in a){
        //         b[i] = new Array(j)
        //     }
        // }
        // return b
    }


  render() {
        const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit
         let a = [];
         let b ={};
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <div>{console.log(this.Arrays())}</div>
          <div className="Todo-App">
              {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}
              <TodoForm handleInputChange={this.handleInputChange}
                        currentTodo={this.state.currentTodo}
                        handleSubmit ={submitHandler}/>

              <TodoList handleToggle={this.handleToggle}
                        todos={this.state.todos}
                        handleRemove={this.handleRemove}/>
          </div>
      </div>
    );
  }
}

export default App;

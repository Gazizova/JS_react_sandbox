import React, { Component } from 'react';
import './toDo.css';
import { TodoForm, TodoList, Footer } from './component/todo';
import {
  addTodo,
  generalId,
  findById,
  toggleTodo,
  updateTodo,
  removeTodo,
  filterTodos
} from './lib/todoHelper';
import { ThemeContext } from './component/router/Router';
import { pipe, partial } from './lib/utils';
import { loadTodos, createTodo, saveTodo, destroyTodo } from './lib/todoService';

class ToDoApp extends Component {
  state = {
    todos: [],
    currentTodo: ''
  };

  static contextType = ThemeContext;

  componentDidMount() {
    loadTodos().then(todos => this.setState({ todos }));
  }

  handleRemove = (id, evt) => {
    evt.preventDefault();
    const updatedTodos = removeTodo(this.state.todos, id);
    this.setState({ todos: updatedTodos });
    destroyTodo(id).then(() => this.handleTempMessage('Todo removed'));
  };

  handleInputChange = event => {
    this.setState({
      currentTodo: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newId = generalId();
    const newTodo = {
      id: newId,
      name: this.state.currentTodo,
      isComplete: false
    };
    const updatedTodos = addTodo(this.state.todos, newTodo);
    this.setState({
      todos: updatedTodos,
      currentTodo: '',
      errorMessage: ''
    });
    createTodo(newTodo).then(this.handleTempMessage('Todo added'));
  };

  handleEmptySubmit = evt => {
    evt.preventDefault();
    this.setState({
      errorMessage: 'Please supply the todo name'
    });
  };

  handleTempMessage = msg => {
    this.setState({ successMessage: msg });
    setTimeout(() => this.setState({ successMessage: '' }), 2000);
  };

  handleToggle = id => {
    // const getupdatedTodos = pipe(
    //   findById,
    //   toggleTodo,
    //   partial(updateTodo, this.state.todos)
    // );
    // const updatedTodos = getupdatedTodos(id, this.state.todos);

    // const todo = findById(id, this.state.todos);
    // const toggled = toggleTodo(todo);
    // const updatedTodos = updateTodo(this.state.todos, toggled);
    // this.setState({ todos: updatedTodos });

    const todo = findById(id, this.state.todos);
    const toggled = toggleTodo(todo);
    const getUpdatedTodos = partial(updateTodo, this.state.todos);
    const updatedTodos = getUpdatedTodos(toggled);
    this.setState({ todos: updatedTodos });
    saveTodo(toggled).then(() => this.handleTempMessage('Todo Updated'));
  };

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;

    const displayTodos = filterTodos(this.state.todos, this.context.route);
    return (
      <div className="Todo-App">
        {this.state.errorMessage && <div className="error">{this.state.errorMessage}</div>}
        {this.state.successMessage && (
          <div className="success lesson">{this.state.successMessage}</div>
        )}
        <TodoForm
          handleInputChange={this.handleInputChange}
          currentTodo={this.state.currentTodo}
          handleSubmit={submitHandler}
        />

        <TodoList
          handleToggle={this.handleToggle}
          todos={displayTodos}
          handleRemove={this.handleRemove}
        />
        <Footer />
      </div>
    );
  }
}

export default ToDoApp;

import React, { Component } from 'react';
import ToDoApp from '../courses/egghead/build_first_react_app/src/ToDoApp';
export class HomeAlt extends Component {
  numbers = [1, 2, 3, 4, 5];

  NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map(number => <li key={number.toString()}>{number}</li>);
    return <ul>{listItems}</ul>;
  }

  render() {
    return (
      <div id="home">
        <h2>This is the home page.</h2>

        <ToDoApp />
        <button onClick={() => window.open('https://github.com/Gazizova', 'Github')}>Button</button>
        {/* <this.NumberList numbers={this.numbers}/> */}
      </div>
    );
  }
}

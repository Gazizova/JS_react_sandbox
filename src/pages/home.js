import React, {Component} from "react";

export class HomeAlt extends Component{
    numbers = [1, 2, 3, 4, 5];

    NumberList(props) {
        const numbers = props.numbers;
        const listItems = numbers.map((number) =>
          <li key={number.toString()}>{number}</li>
        );
        return (
          <ul>{listItems}</ul>
        );
      }

    render() {
        return (
            <div id="home">
                <h2>This is the home page.</h2>
                <div>home</div>
                <this.NumberList numbers={this.numbers}/>
            </div>
        );
    }
}


import React, { Component } from "react";

class ComponentFetch extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentWillMount() {
    fetch("https://swapi.co/api/people/").then(response =>
      response.json().then(({ results: items }) => this.setState({ items }))
    );
  }
  render() {
    return (
      <div className="lesson">
        <h3> Lesson fetch amd map</h3>
        <div>
          {this.state.items.map(item => (
            <p key={item.name}>{item.name}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default ComponentFetch;

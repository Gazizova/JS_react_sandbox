import React, { Component } from "react";
import ReactDOM from "react-dom";
class ComponentLifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = { val: 0 };
  }

  update = () => {
    this.setState({
      val: this.state.val + 1
    });
  };

  componentDidMount() {
    console.log("componentDidMount");
    this.setState({
      m: 2
    });
    this.inc = setInterval(this.update, 1000);
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.inc);
  }
  //   button = () => (
  //     <button onClick={this.update}>{this.state.val * this.state.m}</button>
  //   );

  render() {
    return (
      <button onClick={this.update}>{this.state.val * this.state.m}</button>
    );
  }
}

export function Button(val) {
  return <button>{123}</button>;
}

class Wrapper extends Component {
  mount = () => {
    debugger;
    ReactDOM.render(<ComponentLifecycle />, document.getElementById("id"));
  };

  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById("id"));
  }
  render() {
    return (
      <div className="lesson">
        <button onClick={this.mount}>Mount</button>
        <button onClick={this.unmount}>Unmount</button>
        <div id="id" />
      </div>
    );
  }
}

export default Wrapper;

import React, { Component } from "react";
import ReactDOM from "react-dom";
class ComponentLifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = { val: 0 };
  }
  static defaultProps = {
    propsval: 0
  };

  update = () => {
    this.setState({
      val: this.state.val + 1
    });
  };

  updateProps = () => {
    ReactDOM.render(
      <ComponentLifecycle propsval={this.props.propsval + 1} />,
      document.getElementById("id")
    );
  };
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.propsval);
  }
  shouldComponentUpdate(nextProps) {
    return nextProps.propsval % 3 === 0;
  }
  componentDidMount() {
    console.log("componentDidMount");
    this.setState({
      m: 2
    });
    this.inc = setInterval(this.update, 3000);
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.inc);
  }

  render() {
    return (
      <div>
        <button onClick={this.update}>{this.state.val * this.state.m}</button>
        <button onClick={this.updateProps}>props: {this.props.propsval}</button>
      </div>
    );
  }
}

export function Button(val) {
  return <button>{123}</button>;
}

class Wrapper extends Component {
  mount = () => {
    ReactDOM.render(<ComponentLifecycle />, document.getElementById("id"));
  };

  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById("id"));
  }
  render() {
    return (
      <div className="lesson">
        <h3>Lesson Component life methods</h3>
        <button onClick={this.mount}>Mount</button>
        <button onClick={this.unmount}>Unmount</button>
        <div id="id" />
      </div>
    );
  }
}

export default Wrapper;

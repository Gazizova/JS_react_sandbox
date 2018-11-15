import React, { Component } from "react";

class ChildrenComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "None"
    };
  }
  selectItem(selected) {
    this.setState({ selected });
  }
  render() {
    let fn = child =>
      React.cloneElement(child, {
        onClick: this.selectItem.bind(this, child.props.value)
      });
    let items = React.Children.map(this.props.children, fn);
    return (
      <div>
        <h4>You have selected: {this.state.selected} </h4>
        {items}
      </div>
    );
  }
}

class WrapperForChildrenComponets extends Component {
  state = {};
  render() {
    return (
      <div className="lesson">
        <h3>Lesson Children components</h3>
        <ChildrenComponents>
          <button value="A">A</button>
          <button value="B">B</button>
          <button value="C">C</button>
        </ChildrenComponents>
      </div>
    );
  }
}

export default WrapperForChildrenComponets;

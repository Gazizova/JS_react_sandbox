import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable, decorate, action } from "mobx";

const appState = observable({
  count: 0
});
appState.increment = function() {
  this.count++;
};
appState.decrement = function() {
  this.count--;
};

class MobXLesson1 extends Component {
  state = {
    count: 0
  };

  count = this.state.count;
  count2 = 0;

  handleInc = () => {
    this.setState({ count: this.count++ });
  };

  handleDec = () => {
    this.setState({ count: this.count-- });
  };
  handleInc2 = () => {
    this.count2++;
  };

  handleDec2 = () => {
    this.count2--;
  };

  render() {
    return (
      <div>
        <div>
          Counter: {this.count} <br />
          <button onClick={this.handleInc}> + </button>
          <button onClick={this.handleDec}> - </button>
        </div>
        <br />
        <div>
          CounterMobX: {this.count2} <br />
          <button onClick={this.handleInc2}> + </button>
          <button onClick={this.handleDec2}> - </button>
        </div>
      </div>
    );
  }
}
decorate(MobXLesson1, {
  count2: observable,
  handleInc2: action,
  handleDec2: action
});

export default observer(MobXLesson1);

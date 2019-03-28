import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { Component } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';

const appState = observable({
  count: 0
});
appState.increment = function() {
  this.count++;
};
appState.decrement = function() {
  this.count--;
};

export const M2 = observer(
  class MobXLesson12 extends Component {
    render() {
      return (
        <div>
          Counter {appState.count} <br />
          <button onClick={this.handleInc}> + </button>
          <button onClick={this.handleDec}> - </button>
        </div>
      );
    }

    handleInc = () => {
      appState.increment();
    };

    handleDec = () => {
      appState.decrement();
    };
  }
);

import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable, decorate, action } from 'mobx';
import DevTools from 'mobx-react-devtools';

export const M = observer(
  class MobXLesson1 extends Component {
    state = {
      count: 0
    };
    count = this.state.count;

    handleInc = () => {
      this.setState({ count: this.count++ });
    };

    handleDec = () => {
      this.setState({ count: this.count-- });
    };

    // mobx

    count2 = 0;

    handleIncDecorate = () => {
      this.count2++;
    };

    handleDecDecorate = () => {
      this.count2--;
    };

    render() {
      return (
        <div>
          <DevTools />
          <div>
            Counter: {this.count} <br />
            <button onClick={this.handleInc}> + </button>
            <button onClick={this.handleDec}> - </button>
          </div>
          <br />
          <div>
            CounterMobXDecorate: {this.count2} <br />
            <button onClick={this.handleIncDecorate}> + </button>
            <button onClick={this.handleDecDecorate}> - </button>
          </div>
        </div>
      );
    }
  }
);

decorate(M, {
  count2: observable,
  handleIncDecorate: action,
  handleDecDecorate: action
});

// export default M;

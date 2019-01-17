import React from 'react';

// class StopWatch extends Component{
//
// }

console.log(React.version);

class Lesson11 extends React.Component {
  // constructor(...args) {
  //     super(...args)
  // }

  // case 1:

  // state = {count: 0}
  // handleClick = this.handleClick.bind(this)
  // handleClick = function(){
  //    this.setState(({count}) => ({
  //         count: count +1
  //     }))
  // }

  // case 2:
  //
  // state = {count: 0}
  // handleClick = function(){
  //     this.setState(({count}) => ({
  //         count: count +1
  //     }))
  // }.bind(this)

  // case 3:
  //

  state = { count: 0 };

  handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  };

  render() {
    return (
      <div className="lesson">
        <h3> Lesson 12:</h3>
        <button onClick={this.handleClick}>{this.state.count}</button>
      </div>
    );
  }
}

export default Lesson11;

import React from 'react';
import InputRange from 'react-input-range';

class VolumeSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value:  0 
    };
  }

  render() {
    return (
      <InputRange
        maxValue={100}
        minValue={0}
        value={this.state.value}
        onChange={value => this.setState({ value })} />
    );
  }
}


export default VolumeSlider
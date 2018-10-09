import React, {Component} from 'react';
// import styles from './slider.css'
import 'react-input-range/lib/css/index.css'

import InputRange from 'react-input-range'


export class VolumeSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:  0 
    };
  }
  
  render() {
    
    return (
      <div >slider 
        <InputRange 
          maxValue={this.props.value}
          minValue={0}
          value={this.state.value}
          onChange={value => this.setState({ value })} />
      </div>
        
    );
  }
}

// export default VolumeSlider
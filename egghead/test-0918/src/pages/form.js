import React from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit"
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.props.onTemperatureChange(event.target.value);
  }
  render() {
    const scale = this.props.scale;
    return (
      <div className="form-block">
      <label>
        Temperature in {scaleNames[scale]}:{" "}</label>
        <input
          name="farengeit"
          type="text"
          onChange={this.handleChange}
          value={this.props.temperature}
        />
      </div>
    );
  }
}

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      temperature: "",
      scale: 'c'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleCelsiusChange(temperature) {
    this.setState({ temperature: temperature, scale: 'c'});
  }
  handleFahrenheitChange(temperature) {
    this.setState({temperature, scale: 'f'});
  }
  onSubmit(e) {
    e.preventDefault();
    if (!this.state.value) {
      alert("Please, input something");
    } else {
      alert("You input: " + this.state.value.toUpperCase());
    }
  }

  temperatureCalculator(props) {
    if (props.celsius >= 100) {
      return <div>Temperature is: {props.celsius}. Water will boil</div>;
    } else {
      return <div>Temperature is: {props.celsius}. Water will not boil</div>;
    }
  }

  toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.state.scale;
    const celsius = scale === 'f' ? this.tryConvert(temperature, this.toCelsius): temperature;
    const farengeit = scale === 'c'? this.tryConvert(temperature, this.toFahrenheit): temperature;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-block">
            <label htmlFor="name">Input any text: </label>
            <input
              type="text"
              name="name"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <div className='temp-calc-block'>
          <div className='temp-calc-block--input'>
            <TemperatureInput
              scale="c"
              onTemperatureChange={this.handleCelsiusChange}
              temperature={celsius}
            />
            <TemperatureInput
              scale="f"
              onTemperatureChange={this.handleFahrenheitChange}
              temperature={farengeit}
            />
           </div>  
           <div className='temp-calc-block--resume'>
            <this.temperatureCalculator celsius={temperature} />
          </div>  
          </div>  
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

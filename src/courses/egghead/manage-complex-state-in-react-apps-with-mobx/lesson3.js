import { observable, computed, decorate } from 'mobx';
import { observer } from 'mobx-react';
import { Component } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';

export const Temp = observer(
  class Temperature extends Component {
    // To change the unit and temperature, do that here instead of in the console.
    unit = 'C';
    temperatureCelsius = 25;

    setUnit = e => {
      console.log(e.target.value);
      this.unit = e.target.value;
    };
    onTemperatureUpdate = e => {
      this.temperatureCelsius = parseInt(e.target.value);
    };

    get temperatureKelvin() {
      console.log('calculating Kelvin');
      return this.temperatureCelsius * (9 / 5) + 32;
    }

    get temperatureFahrenheit() {
      console.log('calculating Fahrenheit');
      return this.temperatureCelsius + 273.15;
    }

    get temperature() {
      console.log('calculating temperature');
      switch (this.unit) {
        case 'K':
          return this.temperatureKelvin + 'ºK';
        case 'F':
          return this.temperatureFahrenheit + 'ºF';
        case 'C':
          return this.temperatureCelsius + 'ºC';
        default:
          return 'waiting for temperature';
      }
    }
    render() {
      debugger;
      return (
        <div className="lesson">
          <div>
            <label>
              Temperature in Celsius
              <input
                type="text"
                placeholder={this.temperatureCelsius}
                onInput={this.onTemperatureUpdate}
              />
            </label>
          </div>
          <div>
            <label>
              Convert to C, F, K
              <input type="text" placeholder={this.unit} onInput={this.setUnit} />
            </label>
          </div>
          Converted to {this.unit}:<div>{this.temperature}</div>
        </div>
      );
    }
  }
);

decorate(Temp, {
  unit: observable,
  temperatureCelsius: observable,
  temperatureKelvin: computed,
  temperatureFahrenheit: computed,
  temperature: computed
});

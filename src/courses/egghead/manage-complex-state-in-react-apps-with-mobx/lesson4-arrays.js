import { observable, computed, action, transaction, asMap, decorate } from 'mobx';
import { observer } from 'mobx-react';
import { Component } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import DevTools from 'mobx-react-devtools';

export const TempLesson4 = observer(
  class Temperature extends Component {
    unit = 'C';
    temperatureCelsius = 25;

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
      }
    }

    setUnit = e => {
      this.unit = e.target.value;
    };

    setCelsius = e => {
      this.temperatureCelsius = parseInt(e.target.value);
    };

    setTemperatureAndUnit = (newDegrees, newUnit) => {
      this.temperatureCelsius = parseInt(newDegrees);
      this.unit = newUnit;
    };

    inc = () => {
      this.temperatureCelsius = this.temperatureCelsius + 1;
    };

    render() {
      return (
        <div className="lesson">
          <div>
            <div>{this.setTemperatureAndUnit(10, 'F')}</div>
            <label>
              Temperature in Celsius ( Array)
              <input type="text" placeholder={this.temperatureCelsius} onInput={this.setCelsius} />
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

decorate(TempLesson4, {
  unit: observable,
  temperatureCelsius: observable,
  temperatureKelvin: computed,
  temperatureFahrenheit: computed,
  temperature: computed,
  setUnit: action,
  setCelsius: action,
  setTemperatureAndUnit: action,
  inc: action
});

// temps = observable.map({
//   Amsterdam: new TempLesson4(),
//   Rome: new TempLesson4()
// });

export const ArrayTemp = observer(({ temperature }) => (
  <ul>
    {Array.from(temperature.keys(), city => (
      <li key={city}>
        {city}: {temperature.get(city).temperature}
      </li>
    ))}
    <DevTools />
  </ul>
));

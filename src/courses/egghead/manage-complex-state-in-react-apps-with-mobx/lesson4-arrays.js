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

    setTemperatureAndUnit = (degrees, unit) => {
      this.setCelsius(degrees);
      this.setUnit(unit);
    };

    render() {
      return (
        <div className="lesson">
          <div>
            <label>
              Temperature in Celsius
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
  setTemperatureAndUnit: action
});

// temps = observable.map({
//   Amsterdam: new TempLesson4(),
//   Rome: new TempLesson4()
// });

export const ArrayTemp = observer(({ temperature }) => (
  <div>
    {/*
        keys and values now return iterators, to return an array, use Array.from with the iterator
        https://github.com/mobxjs/mobx/issues/1488
      */
    Array.from(temperature.keys(), city => (
      <div key={city}>
        {city}: {temperature.get(city).temperature}
      </div>
    ))}
    <DevTools />
  </div>
));

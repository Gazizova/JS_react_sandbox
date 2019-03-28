// noprotect
import {
  observable,
  computed,
  action,
  transaction,
  useStrict,
  extendObservable,
  asMap,
  when,
  autorun,
  decorate
} from 'mobx';
import { observer, Provider, inject } from 'mobx-react';
import { Component } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import DevTools from 'mobx-react-devtools';

const APPID = '6c9bb64443d124019b41ea00de26732e';
export const Temperature = observer(
  class Temperature {
    id = Math.random();
    unit = 'C';
    temperatureCelsius = 25;
    location = 'Amsterdam, NL';
    loading = true;

    constructor(location) {
      this.location = location;
      this.fetch();
    }

    fetch() {
      window
        .fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${APPID}&q=${this.location}`)
        .then(res =>
          res.json().then(
            action(json => {
              this.temperatureCelsius = json.main.temp - 273.15;
              this.loading = false;
            })
          )
        )
        .catch(function(error) {
          console.log('This city is not in this api, try again.');
        });
    }

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

    setUnit(newUnit) {
      this.unit = newUnit;
    }

    setCelsius(degrees) {
      this.temperatureCelsius = degrees;
    }

    setTemperatureAndUnit(degrees, unit) {
      this.setCelsius(degrees);
      this.setUnit(unit);
    }

    inc() {
      this.setCelsius(this.temperatureCelsius + 1);
    }
  }
);

export const App = observer(({ temperatures }) => (
  <ul>
    <TemperatureInput temperatures={this.props.temperatures} />
    {this.props.temperatures.map(t => (
      <TView key={t.id} temperature={t} />
    ))}
    <DevTools />
  </ul>
));

const TemperatureInput = observer(
  class TemperatureInput extends React.Component {
    input = '';

    render() {
      return (
        <li>
          Destination
          <input onChange={this.onChange} />
          <button onClick={this.onSubmit}>Add</button>
        </li>
      );
    }

    onChange = e => {
      this.input = e.target.value;
    };

    onSubmit = () => {
      this.props.temperatures.push(new Temperature(this.input));
      this.input = '';
    };
  }
);

const TView = observer(
  class TView extends React.Component {
    render() {
      const t = this.props.temperature;
      return (
        <li onClick={this.onTemperatureClick}>
          {t.location}:{t.loading ? 'loading..' : t.temperature}
        </li>
      );
    }

    onTemperatureClick = () => {
      this.props.temperature.inc();
    };
  }
);

decorate(
  Temperature,
  {
    unit: observable,
    temperatureCelsius: observable,
    location: observable,
    loading: observable,
    fetch: action,
    temperatureKelvin: computed,
    temperatureFahrenheit: computed,
    temperature: computed,
    setUnit: action,
    setCelsius: action,
    setTemperatureAndUnit: action,
    inc: action
  },
  TemperatureInput,
  {
    input: observable,
    onChange: action,
    onSubmit: action
  },
  TView,
  { onTemperatureClick: action }
);

/// index file
// const temps = observable([]);

// ReactDOM.render(
//   <Provider temperatures={temps}>
//     <App />
//   </Provider>,
//   document.getElementById('app')
// );

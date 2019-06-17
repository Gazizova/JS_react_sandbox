import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable, decorate, action, computed } from "mobx";

class Temperature extends React.Component {
  unit = "C";
  tempCelsius = 25;

  get getTemperatureKelvin() {
    return this.tempCelsius * (9 / 5) * 32;
  }

  get getTemperatureFarenheit() {
    return this.tempCelsius + 273.15;
  }
  get temp() {
    switch (this.unit) {
      case "K":
        return this.getTemperatureKelvin;
      case "F":
        return this.getTemperatureFarenheit;
      case "C":
        return this.tempCelsius;
    }
  }

  render() {
    return null;
  }
}
decorate(Temperature, {
  unit: observable,
  tempCelsius: observable,
  getTemperatureKelvin: computed,
  getTemperatureFarenheit: computed,
  temp: computed
});

export default observer(Temperature);

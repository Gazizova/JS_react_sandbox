import React, { Component } from "react";
// import {VolumeSlider} from '../components/slider'
import data from "../data/data.1.json";
import "./slider.css";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import Button from "../components/button/button";
export class SliderPage extends Component {
  constructor(props) {
    super(props);
    this.handleFirstClick = this.handleFirstClick.bind(this);
    this.handleFSecondClick = this.handleFSecondClick.bind(this);
    this.state = {
      value: 0,
      value4: {
        min: 5,
        max: 10
      },
      isDubleSlider: false
    };
  }

  localData = JSON.parse(JSON.stringify(data));
  section = this.localData.assessment.sections[0].subsections[1].groups[0]
    .questions[1].answers;

  handleFirstClick() {
    this.setState({ isDubleSlider: true });
  }

  handleFSecondClick() {
    this.setState({ isDubleSlider: false });
  }

  render() {
    const isDubleSlider = this.state.isDubleSlider;
    let button;
    let slider;
    if (isDubleSlider) {
      button = (
        <Button value={"select default slider"} onClick={this.handleFSecondClick} />
      );
      slider = (
        <InputRange
          maxValue={this.section.length}
          minValue={0}
          formatLabel={value => `${value} kg`}
          value={this.state.value4}
          onChange={value => this.setState({ value4: value })}
          onChangeComplete={value => console.log(value)}
        />
      );
    } else {
      button = <Button value={"select double slider"} onClick={this.handleFirstClick} />;
      slider = (
        <InputRange
          maxValue={this.section.length}
          minValue={0}
          value={this.state.value}
          onChange={value => this.setState({ value })}
          onChangeComplete={value => console.log(value)}
        />
      );
    }
    return (
      <div className="componentSlider">
      <div className="inner-slider">
        {slider}
        <div className="componentSlider-message">
          {" "}
          You select{" "}
          {isDubleSlider
            ? " from " + this.state.value4.min + " to " + this.state.value4.max
            : this.state.value}
        </div>
        </div>
        {button}
      </div>
    );
  }
}

import React, { Component } from "react";
import "./slider.css";
import "react-input-range/lib/css/index.css";
import { CustomRadioButton } from "../components/atoms/buttons/radio-button";
import { TextArea } from "../components/atoms/text-area/text-area";
import { ShortSingleSelect } from "../components/atoms/short-single-select/short-single-select";

class DisplayCustomRadioButton extends React.Component {
  state = {
    options: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
      { label: "Option 4", value: "option4" }
    ],
    selected: ["option1", "option3"],
    optionsSingle: [
      { label: "Option 1s", value: "option1" },
      { label: "Option 2s", value: "option2" },
      { label: "Option 3s", value: "option3" },
      { label: "Option 4s", value: "option4" }
    ],
    value: "option1"
  };

  onChangeMultiselect = selectedItem => {
    if (this.state.selected.indexOf(selectedItem) >= 0) {
      const removeIndex = this.state.selected.indexOf(selectedItem);
      this.setState({
        selected: [
          ...this.state.selected.slice(0, removeIndex),
          ...this.state.selected.slice(removeIndex + 1)
        ]
      });
    } else {
      this.setState({
        selected: [...this.state.selected, selectedItem]
      });
    }
  };

  onChangeSingleSelect = value => {
    this.setState({ value });
  };

  render() {
    return (
      <React.Fragment>
        <CustomRadioButton
          multiselect={true}
          label={"MultiSelect Radio button"}
          onClick={this.onChangeMultiselect}
          options={this.state.options}
          selected={this.state.selected}
        />
        <CustomRadioButton
          multiselect={false}
          label={"Single Select Radio button"}
          onClick={this.onChangeSingleSelect}
          options={this.state.optionsSingle}
          value={this.state.value}
        />
      </React.Fragment>
    );
  }
}

class DisplayShortSingleSelect extends React.Component {
  state = {
    value: "2",
    options: [
      { label: "label1", value: "1" },
      { label: "label2", value: "2" },
      { label: "label3", value: "3" },
      { label: "label4", value: "4" }
    ]
  };

  onChange = value => {
    this.setState({ value });
  };

  render() {
    return (
      <React.Fragment>
        <ShortSingleSelect
          onChange={this.onChange}
          value={this.state.value}
          options={this.state.options}
        />
      </React.Fragment>
    );
  }
}

export class Components extends Component {
  state = {
    textValue: ""
  };

  onChange = e => {
    this.setState({ textValue: e.target.value });
  };
  render() {
    return (
      <div className="components">
        <DisplayCustomRadioButton />
        <TextArea value={this.state.textValue} onChange={this.onChange} />
        <DisplayShortSingleSelect />
      </div>
    );
  }
}

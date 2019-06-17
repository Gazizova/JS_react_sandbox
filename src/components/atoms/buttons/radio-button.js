import React from "react";
import styled, { css } from "styled-components";
import { OptionText } from "../text/text";

const iconRadioCheck = require("./ic-global-check.png");
const iconRadioOff = require("./ic-global-radio-off.png");

const WrapperStyledRadioButton = styled.div`
  display: flex;
  align-items: center;
`;

const StyledTitle = styled(OptionText)`
  height: 32px;
  padding-left: 16px;
  font-weight: normal;
  text-align: left;
`;

const StyledView = styled.div`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  background-color: ${props => {
    switch (props.type) {
      case "primary":
        return "#5d5cff";
      case "green":
        return "#27b869";
      case "grapefruit":
        return "#ff5c5c";
      case "default":
        return "#e4e4ed";
      default:
        return "red";
    }
  }};

  color: ${props => {
    switch (props.type) {
      case "primary":
      case "green":
      case "grapefruit":
        return "#ffffff";
      case "default":
        return "#42425c";
      default:
        return "red";
    }
  }};

  ${props =>
    props.center &&
    css`
      justify-content: center;
    `}
`;
const StyledText = styled.div`
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  padding: 0 16px;
  flex: 1;

  color: ${props => {
    switch (props.type) {
      case "primary":
      case "green":
      case "grapefruit":
        return "#ffffff";
      case "disabled":
        return "#ffffff";
      case "default":
        return props.theme.textShade1;
      default:
        return "red";
    }
  }};
`;

const StyledRadioWrapper = styled.div`
  padding-right: 24px;
`;

const StyledImage = styled.img`
  height: 24px;
  width: 24px;
  /* padding-right: 16px;
  padding-left: 16px; */

  box-sizing: content-box;
`;

export function RadioButtonItem(props) {
  const { onClick, disabled, type, style, selected, option } = props;
  const currentType = disabled ? "disabled" : type;
  return (
    <WrapperStyledRadioButton>
      <StyledView type={currentType} style={style} onClick={onClick}>
        <StyledText type={currentType}>{option.label}</StyledText>
        <StyledRadioWrapper>
          <StyledImage src={selected ? iconRadioCheck : iconRadioOff} />
        </StyledRadioWrapper>
      </StyledView>
    </WrapperStyledRadioButton>
  );
}
export class CustomRadioButton extends React.Component {
  render() {
    const {
      onClick,
      disabled,
      type,
      style,
      selected,
      label,
      value,
      multiselect
    } = this.props;

    const currentType = disabled ? "disabled" : type;

    return (
      <React.Fragment>
        <StyledTitle>{label}</StyledTitle>
        <div>
          {this.props.options.map(option =>
            multiselect ? (
              <RadioButtonItem
                style={style}
                key={option.value}
                option={option}
                selected={selected.includes(option.value)}
                onClick={value => onClick(option.value)}
                type={currentType}
              />
            ) : (
              <RadioButtonItem
                style={style}
                key={option.value}
                option={option}
                selected={option.value === value}
                onClick={() =>
                  option.value === value ? onClick(null) : onClick(option.value)
                }
                type={currentType}
              />
            )
          )}
        </div>
      </React.Fragment>
    );
  }
}

CustomRadioButton.defaultProps = {
  multiselect: true,
  value: "2",
  options: [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
    { label: "Option 4", value: "option4" },
    { label: "Option 5", value: "option5" },
    { label: "Option 6", value: "option6" },
    { label: "Option 7", value: "option7" },
    { label: "Option 8", value: "option8" }
  ],
  selected: ["option1", "option2", "option3"],
  title: "Dummy text",
  disabled: false,
  checked: true,
  icon: null,
  type: "default",
  onClick: () => alert("!")
  // onClick: props => (props.checked = !props.checked)
};

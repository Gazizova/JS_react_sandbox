import React from "react";
import styled, { css } from "styled-components";
import { OptionText } from "../text/text";

const WrapperStyledSelectItem = styled.div`
  width: 100%;
  height: 88px;
`;
const StyledTitle = styled(OptionText)`
  height: 32px;
  padding-left: 16px;
  font-weight: normal;
  text-align: left;
`;

const WrapperStyledSelectItemButton = styled.div`
  min-width: 116px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
`;

const StyledSelectItem = styled.div`
  //   width: 116px;
  height: 48px;
  line-height: 48px;
  text-align: center;
  border-right: 1px solid grey;
  font-family: OpenSans;
  font-size: 16px;
  font-weight: 600;
  overflow: hidden;
  color: ${props => (props.selected ? "#fff" : "#42425c")};
  background-color: ${props => (props.selected ? "#5d5cff" : "#e4e4ed")};
  :hover {
    background-color: ${props => "#5d5cff"};
  }
  flex: 1 2 116px;
`;

function SelectItem(props) {
  return (
    <StyledSelectItem
      style={props.style}
      onClick={props.onClick}
      selected={props.selected}
      name={props.nameItem}
      disabled={props.disabled}
    >
      {props.nameItem}
    </StyledSelectItem>
  );
}

const firstButtonStyle = {
  borderTopLeftRadius: "8px",
  borderBottomLeftRadius: "8px"
};
const lastButtonStyle = {
  borderTopRightRadius: "8px",
  borderBottomRightRadius: "8px"
};
const allStyles = {
  borderTopLeftRadius: "8px",
  borderBottomLeftRadius: "8px",
  borderTopRightRadius: "8px",
  borderBottomRightRadius: "8px"
};

export function ShortSingleSelect(props) {
  const { options, label, disabled, value } = props;
  const length = props.options.length;
  return (
    <WrapperStyledSelectItem>
      <StyledTitle>{label}</StyledTitle>
      <WrapperStyledSelectItemButton>
        {options.map((option, i) => (
          <SelectItem
            key={option.value}
            disabled={disabled}
            nameItem={option.label}
            onClick={() => props.onChange(option.value)}
            selected={option.value === value}
            style={
              length === 1
                ? allStyles
                : null || i === 0 || i % 4 === 0
                ? firstButtonStyle
                : null || (i + 1) % 4 === 0 || i === length - 1
                ? lastButtonStyle
                : null
            }
          />
        ))}
      </WrapperStyledSelectItemButton>
    </WrapperStyledSelectItem>
  );
}

ShortSingleSelect.defaultProps = {
  label: "Short Single Select",
  options: [
    { label: "label1", value: "1" },
    { label: "label2", value: "2" },
    { label: "label3", value: "3" },
    { label: "label4", value: "4" }
  ],
  value: "2",
  onChange: () => alert("Not implemented")
};

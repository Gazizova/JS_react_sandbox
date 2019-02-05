import React from 'react';
import styled, { css } from 'styled-components';

const iconRadioCheck = require('./ic-global-check.png');
const iconRadioOff = require('./ic-global-radio-off.png');

const StyledView = styled.div`
  width: 100%;
  height: 64px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
  min-height: 48px;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  align-items: center;

  background-color: ${props => {
    switch (props.type) {
      case 'primary':
        return '#5d5cff';
      case 'green':
        return '#27b869';
      case 'grapefruit':
        return '#ff5c5c';
      case 'default':
        return '#e4e4ed';
      default:
        return 'red';
    }
  }};

  color: ${props => {
    switch (props.type) {
      case 'primary':
      case 'green':
      case 'grapefruit':
        return '#ffffff';
      case 'default':
        return '#42425c';
      default:
        return 'red';
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
      case 'primary':
      case 'green':
      case 'grapefruit':
        return '#ffffff';
      case 'disabled':
        return '#ffffff';
      case 'default':
        return props.theme.textShade1;
      default:
        return 'red';
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

export function CustomButton(props) {
  const { onClick, title, disabled, type, checked } = props;

  return (
    <StyledView disabled={disabled} type={type}>
      <StyledText type={type}>{title}</StyledText>
      <StyledRadioWrapper>
        <StyledImage src={checked ? iconRadioCheck : iconRadioOff} onClick={onClick} />
      </StyledRadioWrapper>
    </StyledView>
  );
}

CustomButton.defaultProps = {
  title: 'Dummy text',
  disabled: false,
  checked: true,
  icon: null,
  type: 'default',
  onClick: () => alert('Not implemented')
};

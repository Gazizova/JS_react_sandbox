import React from 'react';

import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CustomLabel = styled.div`
  padding-left: 16px;
  margin-top: 8px;
  height: 32px;
  color: ${props => props.theme.textShade1};
  width: 430px;
  font-family: OpenSans;
  border-width: 0;
  font-size: 16px;
  font-weight: bold;
`;

const StyledInput = styled.textarea`
  border-radius: 8px;
  color: palevioletred;
  height: 136px;
  background-color: ${props => props.theme.shade2};
  color: ${props => props.theme.textShade2};
  padding: 8px 16px 8px 16px;
  margin: 0;
  border-bottom-color: ${props => props.theme.primary};
  border-bottom-width: 5px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  flex: 1;
`;

export class TextArea extends React.Component {
  state = {
    length: 140
  };

  onChange = symbol => {
    let symbolcount = !!symbol;
    this.setState({ length: this.state.length - symbolcount });
  };

  render() {
    return (
      <React.Fragment>
        <StyledWrapper>
          <CustomLabel>{this.props.label}</CustomLabel>
          <StyledInput
            style={{ textAlignVertical: 'top' }}
            multiline={true}
            editable={true}
            autoCorrect={false}
            autoComplete="off"
            blurOnSubmit={true}
            autoCapitalize="none"
            keyboardType="default"
            maxLength={140}
            placeholder={this.props.placeholder}
            onChangeText={this.onChange}
          />
          <CustomLabel>{this.state.length} symbols left</CustomLabel>
        </StyledWrapper>
      </React.Fragment>
    );
  }
}

TextArea.defaultProps = {
  disabled: false,
  label: 'TextAreaLabel',
  placeholder: 'TextArea Value'
};

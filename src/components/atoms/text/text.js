import styled from "styled-components";

export const GlobalSectionText = styled.h1`
  height: 48px;
  font-family: OpenSans;
  font-size: 30px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  margin: 0;
  padding: 0;
  color: ${props => props.theme.textShade2};
`;

export const CardTitleText = styled.p`
  height: 32px;
  font-family: OpenSans;
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  color: ${props => props.theme.textShade2};
`;

export const CardSubTitleText = styled.p`
  height: 16px;
  opacity: 0.4;
  font-family: OpenSans;
  font-weight: 600;
  margin: 0;
  padding: 0;
  color: ${props => props.theme.textShade2};
`;

export const GlobalSubheaderText = styled.p`
  font-family: OpenSans;
  font-size: 20px;
  height: 40px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  color: ${props => props.theme.textShade2};
`;

export const OptionText = styled.p`
  font-family: OpenSans;
  font-size: 16px;
  color: ${props => props.theme.textShade1};
`;
export const OptionSelectedText = styled.p`
  font-family: OpenSans;
  font-size: 14px;
  font-weight: bold;
  color: ${props => props.theme.textShade1};
`;

export const GlobalChipText = styled.p`
  font-family: OpenSans;
  font-size: 14px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  color: #ffffff;
`;

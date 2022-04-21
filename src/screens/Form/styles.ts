import styled from 'styled-components/native';

import LogoSvg from "../../assets/logo_form.svg";

export const Logo = styled(LogoSvg).attrs(() => ({
  width: 140,
  height: 140
}))`
  margin-bottom: 48px;
`;

export const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFC;
  padding: 16px;
`;

export const Input = styled.TextInput`
  width: 100%;
  padding: 8px 10px;
  margin-bottom: 16px;

  border-radius: 4px;
  border-width: 0.8px;
  border-color: #BDB2FF;
  background-color: #FFFFFC;
`;

export const InputMessage = styled.TextInput`
  width: 100%;
  height: 90px;
  padding: 10px 10px;
  margin-bottom: 16px;

  border-radius: 4px;
  border-width: 0.8px;
  border-color: #BDB2FF;
  background-color: #FFFFFC;
`;

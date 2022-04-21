import styled from 'styled-components/native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

export const Title = styled.Text`
  color: #FFFFFC;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 2px;
`;

export const Button = styled(RectButton)<RectButtonProps>`
width: 100%;
height: 48px;
margin-top: 22px;

align-items: center;
justify-content: center;

border-radius: 4px;
background-color: #BDB2FF;
`;

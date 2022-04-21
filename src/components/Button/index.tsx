import React from 'react';
import LottieView from "lottie-react-native";
import { RectButtonProps } from 'react-native-gesture-handler';

import LoadAnimationSvg from '../../assets/load.json';

import * as S from './styles';

interface ButtonProps extends RectButtonProps {
  title: string;
  isLoading: boolean;
}

export function Button({ title, isLoading, ...rest }: ButtonProps) {
  return (
    <S.Button  {...rest}>
      {isLoading ?
        <LottieView
          loop
          autoPlay
          resizeMode='contain'
          source={LoadAnimationSvg}
        /> :
        <S.Title>{ title }</S.Title> }
    </S.Button>
  );
};

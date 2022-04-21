import React from 'react';
import LottieView from "lottie-react-native";
import { useNavigation } from '@react-navigation/native';

import SuccessJson from '../../assets/sending_success.json';

import * as S from './styles';

export function Home() {
  const { navigate } = useNavigation();

  return (
    <S.View>
      <LottieView
        autoPlay
        loop={false}
        resizeMode='contain'
        source={SuccessJson}
        onAnimationFinish={(isCancelled) => !isCancelled && navigate('Form')}
      />
    </S.View>
  );
};

import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components/Button';

import * as S from './styles';

export function Form() {
  const { navigate } = useNavigation();

  const [loading, setLoading] = useState(false);

  function handleSubmitForm() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      
      navigate('Home');
    }, 2000);
  }

  return (
    <S.View>
      <S.Logo />

      <S.Input placeholder='Your name' editable={!loading} />
      <S.Input
        editable={!loading}
        autoCapitalize='none'
        keyboardType='email-address'
        placeholder='Your best e-mail' />

      <S.InputMessage
        multiline
        editable={!loading}
        textAlignVertical='top'
        placeholder='Type your message here' />

      <Button title='Submit'
        enabled={!loading}
        isLoading={loading}
        onPress={handleSubmitForm} />
        
    </S.View>
  );
};

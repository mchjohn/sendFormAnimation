import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components/Button';

import * as S from './styles';

export function Form() {
  const { navigate } = useNavigation();

  const [loading, setLoading] = useState(false);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function resetForm() {
    setName('');
    setEmail('');
    setMessage('');
  }

  function handleSubmitForm() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      
      navigate('Home');

      resetForm();
    }, 2000);
  }

  return (
    <S.View>
      <S.Logo />

      <S.Input
        value={name}
        editable={!loading}
        autoCapitalize='words'
        onChangeText={setName}
        placeholder='Your name' />
      <S.Input
        value={email}
        editable={!loading}
        autoCapitalize='none'
        onChangeText={setEmail}
        keyboardType='email-address'
        placeholder='Your best e-mail' />

      <S.InputMessage
        multiline
        value={message}
        editable={!loading}
        textAlignVertical='top'
        onChangeText={setMessage}
        placeholder='Type your message here' />

      <Button title='Submit'
        enabled={!loading}
        isLoading={loading}
        onPress={handleSubmitForm} />
    </S.View>
  );
};

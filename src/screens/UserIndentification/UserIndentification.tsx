import React, { useCallback, useState } from 'react';
import { Alert, Keyboard, Platform, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Button } from '@/components';
import { navigations } from '@/constants';

import {
  ButtonContainer,
  Container,
  Emoji,
  Form,
  Input,
  Title,
  TitleContainer,
  Wrapper,
} from './styles';

export default ({ setUser }) => {
  const [isFocused, seIsFocused] = useState<boolean>(false);
  const [username, setUsername] = useState<string>();

  const { navigate } = useNavigation();

  const handleInputBlur = useCallback(() => seIsFocused(false), [seIsFocused]);
  const handleInputFocus = useCallback(() => seIsFocused(true), [seIsFocused]);

  const handleButton = useCallback(() => {
    if (!username) return Alert.alert('Me diz como chamar você 😥');

    setUser({ username });
    navigate(navigations.Confirmation);
  }, [navigate, setUser, username]);

  const handleInput = useCallback((value: string) => setUsername(value), [setUsername]);

  return (
    <Container>
      <Form behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Wrapper>
            <TitleContainer>
              <Emoji>{username ? '😄' : '😀'}</Emoji>
              <Title>{'Como podemos\n chamar você?'}</Title>
            </TitleContainer>

            <Input
              placeholder="Digite um nome"
              onChangeText={handleInput}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              isHighlighted={isFocused || !!username}
              value={username}
            />

            <ButtonContainer>
              <Button onPress={handleButton} text="Confirmar" />
            </ButtonContainer>
          </Wrapper>
        </TouchableWithoutFeedback>
      </Form>
    </Container>
  );
};

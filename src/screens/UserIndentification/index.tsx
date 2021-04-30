import React, { useCallback, useState } from 'react';
import { Platform } from 'react-native';
import { Button } from '@/components';

import { Container, TitleContainer, Form, Emoji, Input, Title, ButtonContainer } from './styles';

export default () => {
  const [isFocused, seIsFocused] = useState<boolean>(false);
  const [username, setUsername] = useState<string>();

  const handleInputBlur = useCallback(() => seIsFocused(false), [seIsFocused]);
  const handleInputFocus = useCallback(() => seIsFocused(true), [seIsFocused]);

  const handleInput = useCallback((value: string) => {
    setUsername(value)
  }, [setUsername]);

  return (
    <Container>
      <Form behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TitleContainer>
          <Emoji>{!!username ? '😄' : '😀'}</Emoji>
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
          <Button text="Confirmar" />
        </ButtonContainer>
      </Form>
    </Container>
  );
};


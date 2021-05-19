import React from 'react';
import { Button } from '@/components';

import { Wrapper, Container, Emoji, Title, Text, ButtonContainer } from './styles';

export default () => {
  return (
    <Container>
      <Wrapper>
        <Emoji>😄</Emoji>
        <Title>Prontinho</Title>
        <Text>
          {'Agora vamos começar a cuidar das suas\n'}
          {'plantinhas com muito cuidado.\n'}
        </Text>
        <ButtonContainer>
          <Button text="Começar" />
        </ButtonContainer>
      </Wrapper>
    </Container>
  );
};

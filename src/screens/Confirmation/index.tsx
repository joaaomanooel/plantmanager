import React, { useCallback } from 'react';
import { Button } from '@/components';

import { Wrapper, Container, Emoji, Title, Text, ButtonContainer } from './styles';
import { useNavigation } from '@react-navigation/native';
import { navigations } from '@/constants';

export default () => {
  const { navigate } = useNavigation();

  const handleMoveOn = useCallback(() => {
    return navigate(navigations.PlantSelect);
  }, [navigate]);

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
          <Button text="Começar" onPress={handleMoveOn} />
        </ButtonContainer>
      </Wrapper>
    </Container>
  );
};

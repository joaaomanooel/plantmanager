import React, { useCallback } from 'react';
import { Button } from '@/components';

import { Wrapper, Container, Emoji, Title, Text, ButtonContainer } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { IConfirmationParams } from '@/interfaces';

const emojis = { hug: '🤗', smile: '😄' };

export default () => {
  const { navigate } = useNavigation();
  const routes = useRoute();

  const { title, subtitle, buttonText, icon, nextScreen } = routes.params as IConfirmationParams;

  const handleMoveOn = useCallback(() => {
    return navigate(nextScreen);
  }, [navigate, nextScreen]);

  return (
    <Container>
      <Wrapper>
        <Emoji>{emojis[icon]}</Emoji>
        <Title>{title}</Title>
        <Text>{subtitle}</Text>
        <ButtonContainer>
          <Button text={buttonText} onPress={handleMoveOn} />
        </ButtonContainer>
      </Wrapper>
    </Container>
  );
};

import React, { useCallback } from 'react';
import { images, navigations } from '@/constants';
import { useNavigation } from '@react-navigation/native';
import { Container, Title, SubTitle, Button, ButtonIcon, Image, Wrapper } from './styles';

export default () => {
  const { navigate } = useNavigation();

  const handleButton = useCallback(() => {
    navigate(navigations.UserIndentification);
  }, [navigate]);

  return (
    <Container>
      <Wrapper>
        <Title>{'Gerencie\n suas plantas de\n forma fácil'}</Title>
        <Image source={images.watering} />
        <SubTitle>
          {'Não esqueça mais de regar suas\n'}
          {'plantas. Nós cuidamos de lembrar você\n'}
          {'sempre que precisar.'}
        </SubTitle>
        <Button onPress={handleButton}>
          <ButtonIcon />
        </Button>
      </Wrapper>
    </Container>
  );
};

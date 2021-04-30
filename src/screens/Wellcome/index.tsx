import React from 'react';
import { images } from '@/constants';

import { Container, Title, SubTitle, Button, ButtonText, Image } from './styles';

const screens: React.FC = () => {
  return (
    <Container>
      <Title>{'Gerencie\n suas plantas de\n forma fácil'}</Title>
      <Image source={images.watering} />
      <SubTitle>
        {'Não esqueça mais de regar suas\n'}
        {'plantas. Nós cuidamos de lembrar você\n'}
        {'sempre que precisar.'}
      </SubTitle>
      <Button>
        <ButtonText>{'>'}</ButtonText>
      </Button>
    </Container>
  );
}

export default screens;
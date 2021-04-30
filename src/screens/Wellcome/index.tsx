import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { images } from '@/constants';

import { Container, Title, SubTitle, Button, ButtonIcon, Image, Wrapper } from './styles';

const screens: React.FC = () => {
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
        <Button>
          <ButtonIcon />
        </Button>
      </Wrapper>
    </Container>
  );
}

export default screens;

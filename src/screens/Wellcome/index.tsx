import React from 'react';
import { images } from '@/constants';

import { Container, Title, SubTitle, Button, ButtonIcon, Image, Wrapper } from './styles';

export default () => {
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

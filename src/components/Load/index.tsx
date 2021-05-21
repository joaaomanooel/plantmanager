import React from 'react';
import { Container, Lottie } from './styles';

import { animations } from '@/constants';

export default React.memo(() => {
  return (
    <Container>
      <Lottie source={animations.load} autoPlay loop />
    </Container>
  );
});

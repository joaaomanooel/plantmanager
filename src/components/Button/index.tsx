import React from 'react';
import { ButtonProps } from './interfaces';
import { Container, ButtonText } from './styles';

export default React.memo(({ text, fontFamily, textColor, ...props }: ButtonProps) => {
  return (
    <Container {...props}>
      <ButtonText color={textColor} fontFamily={fontFamily}>
        {text}
      </ButtonText>
    </Container>
  );
});

import React from 'react';
import { EnvironmentsButtonComponentProps } from './interfaces';
import { Container, Text } from './styles';

export default React.memo(
  ({ text, active = false, ...props }: EnvironmentsButtonComponentProps) => {
    return (
      <Container {...props} active={active}>
        <Text active={active}>{text}</Text>
      </Container>
    );
  }
);

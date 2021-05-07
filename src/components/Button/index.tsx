import React from 'react';
import { TouchableOpacityProps, StyleProp, TextStyle } from 'react-native';
import { Container, ButtonText } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  textStyle?: StyleProp<TextStyle>;
  text: string;
}

export default React.memo(({ text, textStyle = {}, ...props }: ButtonProps) => {
  return (
    <Container {...props}>
      <ButtonText style={textStyle}>{text}</ButtonText>
    </Container>
  );
});

import React from 'react';
import { TouchableOpacityProps, StyleProp, TextStyle } from 'react-native';
import { Container, ButtonText } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  textStyle?: StyleProp<TextStyle>;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text, textStyle = {}, ...props }) => {
  return (
    <Container {...props}>
      <ButtonText style={textStyle}>{text}</ButtonText>
    </Container>
  );
}

export default Button;

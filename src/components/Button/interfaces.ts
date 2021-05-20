import { TouchableOpacityProps } from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  fontFamily?: string;
  textColor?: string;
  text: string;
}

export interface TextProps {
  fontFamily?: string;
  color?: string;
}

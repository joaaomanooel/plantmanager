import { TextProps } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';

export interface ButtonProps extends RectButtonProps {
  active?: boolean;
}

export interface ButtonTextProps extends TextProps {
  active?: boolean;
}

export interface EnvironmentsButtonComponentProps extends RectButtonProps {
  active?: boolean;
  text: string;
}

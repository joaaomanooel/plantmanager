import styled from 'styled-components/native';
import { colors, layout, fonts } from '@/constants';

import TouchableOpacity from '../TouchableOpacity';
import { TextProps } from './interfaces';

export const Container = styled(TouchableOpacity)`
  border-radius: ${layout.scale() * 16}px;
  background-color: ${colors.green};
  height: ${layout.scale() * 56}px;
  justify-content: center;
  align-items: center;
  opacity: ${({ disabled }) => (!disabled ? 1 : 0.5)};
`;

export const ButtonText = styled.Text<TextProps>`
  font-family: ${({ fontFamily }) => fontFamily || fonts.heading};
  color: ${({ color }) => color || colors.white};
  font-size: ${layout.scale() * 16}px;
`;

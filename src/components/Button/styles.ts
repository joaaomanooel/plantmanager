import styled from 'styled-components/native';
import TouchableOpacity from '../TouchableOpacity';
import { colors, layout, fonts } from '@/constants';

export const Container = styled(TouchableOpacity)`
  border-radius: ${layout.scale() * 16}px;
  background-color: ${colors.green};
  height: ${layout.scale() * 56}px;
  justify-content: center;
  align-items: center;
  opacity: ${({ disabled }) => (!disabled ? 1 : 0.5)};
`;

export const ButtonText = styled.Text`
  font-size: ${layout.scale() * 16}px;
  font-family: ${fonts.heading};
  color: ${colors.white};
`;

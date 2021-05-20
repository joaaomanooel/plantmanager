import styled from 'styled-components/native';
import { layout, fonts, colors } from '@/constants';
import { RectButton } from 'react-native-gesture-handler';
import { ButtonTextProps, ButtonProps } from './interfaces';

export const Container = styled(RectButton)<ButtonProps>`
  background-color: ${({ active }) => (active ? colors.green_light : colors.shape)};
  padding-horizontal: ${layout.scale() * 24}px;
  margin-horizontal: ${layout.scale() * 2}px;
  border-radius: ${layout.scale() * 12}px;
  height: ${layout.scale() * 40}px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text<ButtonTextProps>`
  font-family: ${({ active }) => (active ? fonts.heading : fonts.text)};
  color: ${({ active }) => (active ? colors.green_dark : colors.heading)};
`;

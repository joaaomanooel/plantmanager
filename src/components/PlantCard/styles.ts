import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { colors, layout, fonts } from '@/constants';

const getCardWidth = () => {
  const totalScreenHorizontalPadding = layout.screenPadding * 2;
  const cardMargin = layout.scale() * 10;
  const spacingTotal = cardMargin * 2 + totalScreenHorizontalPadding;
  const cardWidth = (layout.screenWidth - spacingTotal) / 2;

  return cardWidth;
};

export const Container = styled(RectButton)`
  padding: ${layout.scale() * 24}px;
  border-radius: ${layout.scale() * 20}px;
  background-color: ${colors.shape};
  justify-content: center;
  align-items: center;
  width: ${getCardWidth()}px;
`;

export const Title = styled.Text`
  font-size: ${layout.scale() * 14}px;
  margin-top: ${layout.scale() * 8}px;
  font-family: ${fonts.heading};
  color: ${colors.heading};
  text-align: center;
`;

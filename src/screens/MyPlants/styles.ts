import styled from 'styled-components/native';
import { colors, layout, fonts } from '@/constants';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.background};
`;

export const HeaderWapper = styled.View`
  padding-horizontal: ${layout.screenPadding}px;
  padding-top: ${layout.scale() * 32}px;
  width: ${layout.screenWidth}px;
`;

export const Spotlight = styled.View``;

export const SpotlightImage = styled.Image``;

export const SpotlighText = styled.Text``;

export const Plants = styled.View``;

export const PlantsTitle = styled.Text``;

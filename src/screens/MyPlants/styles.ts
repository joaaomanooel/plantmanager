import styled from 'styled-components/native';
import { StyleSheet, FlatList } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { colors, layout, fonts } from '@/constants';
import { IPlants } from '@/interfaces';

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

export const Spotlight = styled.View`
  margin-horizontal: ${layout.screenPadding}px;
  border-radius: ${layout.scale() * 20}px;
  background-color: ${colors.blue_light};
  margin-top: ${layout.scale() * 24}px;
  padding: ${layout.scale() * 16}px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const spotlightImageSize = layout.scale() * 56;
export const SpotlightImage = styled.Image`
  height: ${spotlightImageSize}px;
  width: ${spotlightImageSize}px;
`;

export const SpotlighText = styled.Text`
  padding-horizontal: ${layout.scale() * 16}px;
  text-align: justify;
  color: ${colors.blue};
  flex: 1;
`;

export const Plants = styled.View`
  padding-horizontal: ${layout.screenPadding}px;
  width: ${layout.screenWidth}px;
  justify-content: center;
  flex: 1;
`;

export const PlantsTitle = styled.Text`
  margin-vertical: ${layout.scale() * 20}px;
  font-size: ${layout.scale() * 24}px;
  font-family: ${fonts.heading};
  color: ${colors.heading};
`;

const styles = StyleSheet.create({
  plantsList: {
    paddingBottom: getBottomSpace(),
  },
});

export const PlantsList = styled(FlatList as new () => FlatList<IPlants>).attrs(() => ({
  contentContainerStyle: styles.plantsList,
}))`
  flex: 1;
`;

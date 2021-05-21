import styled from 'styled-components/native';
import { colors, layout, fonts } from '@/constants';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native';
import { IEnvironments, IPlants } from '@/interfaces';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
`;

export const HeaderWapper = styled.View`
  padding-horizontal: ${layout.screenPadding}px;
  padding-top: ${layout.scale() * 32}px;
`;

export const SubTitle = styled.Text`
  font-size: ${layout.scale() * 16}px;
  font-family: ${fonts.text};
  color: ${colors.heading};
`;

export const Title = styled(SubTitle)`
  line-height: ${layout.scale() * 24}px;
  margin-top: ${layout.scale() * 40}px;
  font-family: ${fonts.medium};
`;

const styles = StyleSheet.create({
  environmentsList: {
    marginVertical: layout.scale() * 24,
    paddingBottom: layout.scale() * 5,
    paddingHorizontal: layout.screenPadding,
    height: layout.scale() * 40,
    justifyContent: 'center'
  },
  plantsList: {
    paddingBottom: getBottomSpace()
  },
  plantListColumn: {
    justifyContent: 'space-between',
    paddingVertical: 10
  }
});

export const PlantsListWapper = styled.View`
  padding-horizontal: ${layout.screenPadding}px;
  justify-content: center;
  flex: 1;
`;

export const PlantsList = styled(FlatList as new () => FlatList<IPlants>).attrs(() => ({
  contentContainerStyle: styles.plantsList,
  columnWrapperStyle: styles.plantListColumn
}))`
  flex: 1;
`;

export const EnvironmentsList = styled(FlatList as new () => FlatList<IEnvironments>).attrs(() => ({
  contentContainerStyle: styles.environmentsList
}))``;

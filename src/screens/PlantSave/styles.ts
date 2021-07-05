import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { colors, layout, fonts } from '@/constants';
import { TouchableOpacity } from '@/components';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${colors.shape};
`;

export const PantInfoWapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.shape};
  padding-vertical: ${layout.scale() * 50}px;
  padding-horizontal: ${layout.screenPadding}px;
`;

export const PlantName = styled.Text`
  font-family: ${fonts.heading};
  font-size: ${layout.scale() * 24}px;
  color: ${colors.heading};
  margin-top: ${layout.scale() * 16}px;
`;

export const PlantAbout = styled.Text`
  font-family: ${fonts.text};
  font-size: ${layout.scale() * 16}px;
  color: ${colors.heading};
  margin-top: ${layout.scale() * 10}px;
  margin-bottom: ${layout.scale() * 24}px;
  text-align: center;
`;

export const ControllersWapper = styled.View`
  padding-bottom: ${getBottomSpace() || layout.scale() * 20}px;
  padding-horizontal: ${layout.screenPadding}px;
  padding-top: ${layout.scale() * 20}px;
  background-color: ${colors.white};
`;

export const TipsContainer = styled.View`
  background-color: ${colors.blue_light};
  padding: ${layout.scale() * 16}px;
  border-radius: ${layout.scale() * 20}px;
  bottom: ${layout.scale() * 64}px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

const tipsImageSize = 56;
export const TipsImage = styled.Image`
  height: ${layout.scale() * tipsImageSize}px;
  width: ${layout.scale() * tipsImageSize}px;
`;

export const TipText = styled.Text`
  flex: 1;
  margin-left: ${layout.scale() * 16}px;
  font-size: ${layout.scale() * 16}px;
  color: ${colors.blue};
  font-family: ${fonts.text};
`;

export const AlertLabel = styled.Text`
  text-align: center;
  font-family: ${fonts.complement};
  color: ${colors.heading};
  font-size: ${layout.scale() * 12}px;
  margin-vertical: ${layout.scale() * 8}px;
`;

export const DateTimePickerText = styled.Text`
  color: ${colors.heading};
  font-size: ${layout.scale() * 24}px;
  font-family: ${fonts.text};
`;

export const DateTimePickerButton = styled(TouchableOpacity)`
  padding-vertical: ${layout.scale() * 42}px;
  align-items: center;
  width: 100%;
`;

const styles = StyleSheet.create({
  contentContainerStyle: {
    flex: 1,
  },
});

export const Scroll = styled.ScrollView.attrs(() => ({
  contentContainerStyle: styles.contentContainerStyle,
}))`
  flex: 1;
`;

export const PlantImage = styled(SvgFromUri).attrs(() => ({
  height: layout.scale() * 200,
  width: layout.scale() * 200,
}))``;

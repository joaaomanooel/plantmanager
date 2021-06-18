import styled from 'styled-components/native';
import { colors, layout, fonts } from '@/constants';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  padding-top: ${getStatusBarHeight()}px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const imageSize = 56;
export const Avatar = styled.Image`
  border-radius: ${(layout.scale() * imageSize) / 2}px;
  height: ${layout.scale() * imageSize}px;
  width: ${layout.scale() * imageSize}px;
`;

export const TitleWapper = styled.View``;

export const Title = styled.Text`
  font-size: ${layout.scale() * 32}px;
  font-family: ${fonts.light};
  color: ${colors.heading};
`;

export const Username = styled(Title)`
  line-height: ${layout.scale() * 36}px;
  font-family: ${fonts.heading};
`;

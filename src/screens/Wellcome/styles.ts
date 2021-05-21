import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from '@/components';
import { colors, layout, fonts } from '@/constants';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Wrapper = styled.SafeAreaView`
  padding: ${layout.scale() * 24}px;
  justify-content: space-around;
  align-items: center;
  flex: 1;
`;

export const Title = styled.Text`
  line-height: ${layout.scale() * 38}px;
  font-size: ${layout.scale() * 32}px;
  font-family: ${fonts.heading};
  color: ${colors.heading};
  text-align: center;
  font-weight: bold;
`;

export const SubTitle = styled(Title)`
  padding-horizontal: ${layout.scale() * 20}px;
  line-height: ${layout.scale() * 24}px;
  font-size: ${layout.scale() * 16}px;
  font-family: ${fonts.text};
  font-weight: 400;
  margin: 0;
`;

export const Button = styled(TouchableOpacity)`
  border-radius: ${layout.scale() * 16}px;
  background-color: ${colors.green};
  height: ${layout.scale() * 56}px;
  width: ${layout.scale() * 56}px;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  height: ${layout.scale() * 288}px;
  resize-mode: contain;
`;

export const ButtonIcon = styled(Feather).attrs(() => ({
  size: layout.scale() * 32,
  name: 'chevron-right',
  color: colors.white,
}))``;

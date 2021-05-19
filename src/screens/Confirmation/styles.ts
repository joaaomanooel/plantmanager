import styled from 'styled-components/native';
import { colors, layout, fonts } from '@/constants';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Wrapper = styled.View`
  padding-horizontal: ${layout.scale() * 54}px;
  justify-content: center;
  flex: 1;
`;

export const Emoji = styled.Text`
  margin-bottom: ${layout.scale() * 64}px;
  font-size: ${layout.scale() * 96}px;
  text-align: center;
`;

export const Title = styled.Text`
  font-size: ${layout.scale() * 24}px;
  font-family: ${fonts.heading};
  color: ${colors.heading};
  text-align: center;
`;

export const Text = styled.Text`
  font-size: ${layout.scale() * 16}px;
  font-family: ${fonts.text};
  color: ${colors.heading};
  text-align: center;
`;

export const ButtonContainer = styled.View`
  margin-top: ${layout.scale() * 16}px;
  padding: ${layout.scale() * 24}px;
`;

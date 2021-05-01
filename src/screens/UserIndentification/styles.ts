import styled from 'styled-components/native';
import { colors, layout, fonts } from '@/constants';
import { TextInputProps } from './interfaces';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Wrapper = styled.View`
  justify-content: center;
  flex: 1;
`;

export const Form = styled.KeyboardAvoidingView`
  padding-horizontal: ${layout.scale() * 54}px;
  justify-content: center;
  flex: 1;
`;

export const Emoji = styled.Text`
  font-size: ${layout.scale() * 48}px;
  text-align: center;
`;

export const TitleContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  line-height: ${layout.scale() * 32}px;
  margin-top: ${layout.scale() * 24}px;
  font-size: ${layout.scale() * 24}px;
  font-family: ${fonts.heading};
  color: ${colors.heading};
  text-align: center;
`;

export const Input = styled.TextInput.attrs(() => ({
  placeholderTextColor: colors.body_light
})) <TextInputProps>`
  border-color: ${({ isHighlighted }) => isHighlighted ? colors.green : colors.gray};
  border-bottom-width: ${layout.scale() * 1}px;
  margin-bottom: ${layout.scale() * 42}px;
  margin-top: ${layout.scale() * 50}px;
  font-size: ${layout.scale() * 18}px;
  padding: ${layout.scale() * 10}px;
  font-family: ${fonts.text};
  color: ${colors.heading};
  text-align: center;
`;

export const ButtonContainer = styled.View`
  padding-horizontal: ${layout.scale() * 24}px;
`;

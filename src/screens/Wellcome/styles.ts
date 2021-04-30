import styled from 'styled-components/native';
import { TouchableOpacity } from '@/components';
import { colors, layout } from '@/constants';

export const Container = styled.SafeAreaView`
  justify-content: space-around;
  align-items: center;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: ${layout.scale() * 32}px;
  color: ${colors.heading};
  text-align: center;
  font-weight: bold;
`;

export const SubTitle = styled(Title)`
  padding-horizontal: ${layout.scale() * 20}px;
  line-height: ${layout.scale() * 24}px;
  font-size: ${layout.scale() * 16}px;
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

export const ButtonText = styled.Text`
  font-size: ${layout.scale() * 24}px;
  color: ${colors.white};
  font-weight: 600;
`;

export const Image = styled.Image`
  height: ${layout.scale() * 288}px;
  resize-mode: contain;
`;
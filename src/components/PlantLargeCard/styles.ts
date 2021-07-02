import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { colors, layout, fonts } from '@/constants';

export const Container = styled(RectButton)`
  margin-vertical: ${layout.scale() * 8}px;
  border-radius: ${layout.scale() * 20}px;
  padding: ${layout.scale() * 24}px;
  background-color: ${colors.shape};
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${layout.scale() * 16}px;
  font-family: ${fonts.heading};
  color: ${colors.heading};
  text-align: center;
`;

export const DetailWapper = styled.View`
  padding-horizontal: ${layout.scale() * 16}px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

export const TimeWapper = styled.View`
  justify-content: space-between;
  align-items: flex-end;
`;

export const TimeLabel = styled.Text`
  font-size: ${layout.scale() * 14}px;
  color: ${colors.body_light};
  font-family: ${fonts.text};
`;

export const Time = styled(Title)`
  font-size: ${layout.scale() * 14}px;
`;

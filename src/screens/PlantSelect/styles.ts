import styled from 'styled-components/native';
import { colors, layout, fonts } from '@/constants';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const HeaderWapper = styled.View`
  padding-horizontal: ${layout.scale() * 32}px;
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

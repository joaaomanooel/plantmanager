import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import { layout } from '@/constants';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Lottie = styled(LottieView)`
  height: ${layout.scale() * 200}px;
  width: ${layout.scale() * 200}px;
  background-color: transparent;
`;

import styled from 'styled-components/native';
import { TouchableOpacity } from '@/components';
import { colors } from '@/constants';

export const Container = styled.SafeAreaView`
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

export const Title = styled.Text`
  color: ${colors.heading};
  text-align: center;
  font-weight: bold;
  margin-top: 32px;
  font-size: 32px;
`;

export const SubTitle = styled(Title)`
  padding-horizontal: 20px;
  font-size: 16px;
  margin: 0;
`;

export const Button = styled(TouchableOpacity)`
  background-color: ${colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  height: 56px;
  width: 56px;
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-weight: 600;
  font-size: 24px;
`;

export const Image = styled.Image`
  width: 292px;
  height: 284px;
`;
import React from 'react';
import { navigations } from '@/constants';
import { Header } from '@/components';
import { useNavigation } from '@react-navigation/native';
import { Container, SubTitle, Title, HeaderWapper } from './styles';

export default () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <HeaderWapper>
        <Header />
        <Title>Em qual hambiente</Title>
        <SubTitle>você quer colocar sua planta?</SubTitle>
      </HeaderWapper>
    </Container>
  );
};

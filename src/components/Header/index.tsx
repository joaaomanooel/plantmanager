import React from 'react';
import { Container, Title, TitleWapper, Avatar, Username } from './styles';

export default React.memo(() => {
  return (
    <Container>
      <TitleWapper>
        <Title>Olá,</Title>
        <Username>João Manoel</Username>
      </TitleWapper>
      <Avatar source={{ uri: 'https://avatars.githubusercontent.com/u/17843076?v=4' }} />
    </Container>
  );
});

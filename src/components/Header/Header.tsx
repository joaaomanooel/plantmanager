import React from 'react';
import { HeaderProps } from './interfaces';
import { Container, Title, TitleWapper, Avatar, Username } from './styles';

export default React.memo(({ user }: HeaderProps) => {
  return (
    <Container>
      <TitleWapper>
        <Title>Olá,</Title>
        <Username>{user?.username}</Username>
      </TitleWapper>
      <Avatar source={{ uri: 'https://avatars.githubusercontent.com/u/17843076?v=4' }} />
    </Container>
  );
});

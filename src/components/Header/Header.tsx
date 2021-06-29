import React from 'react';
import { HeaderProps } from './interfaces';
import { Container, Title, TitleWapper, Avatar, Username } from './styles';

export default React.memo(({ user }: HeaderProps) => {
  return (
    <Container>
      <TitleWapper>
        <Title>Olá,</Title>
        <Username>{user.username}</Username>
      </TitleWapper>
      <Avatar uri={`https://avatars.dicebear.com/api/gridy/${user.username}.svg`} />
    </Container>
  );
});

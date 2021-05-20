import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';
import { layout } from '@/constants';

import { Container, Title } from './styles';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  };
}

export default React.memo(({ data, ...props }: PlantProps) => {
  return (
    <Container {...props}>
      <SvgFromUri uri={data.photo} width={layout.scale() * 100} height={layout.scale() * 100} />
      <Title>{data.name}</Title>
    </Container>
  );
});

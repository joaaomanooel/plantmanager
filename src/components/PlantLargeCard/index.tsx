import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';
import { layout } from '@/constants';

import { Container, TimeWapper, Time, TimeLabel, Title, DetailWapper } from './styles';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  };
}

const imageSize = layout.scale() * 56;

export default React.memo(({ data, ...props }: PlantProps) => {
  return (
    <Container {...props}>
      <SvgFromUri uri={data.photo} width={imageSize} height={imageSize} />
      <DetailWapper>
        <Title>{data.name}</Title>
        <TimeWapper>
          <TimeLabel>Regar às</TimeLabel>
          <Time>{data.hour}</Time>
        </TimeWapper>
      </DetailWapper>
    </Container>
  );
});

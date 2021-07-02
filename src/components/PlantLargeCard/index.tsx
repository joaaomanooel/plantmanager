import React from 'react';
import { Animated } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RectButtonProps } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { SvgFromUri } from 'react-native-svg';
import { colors, layout } from '@/constants';

import {
  Container,
  TimeWapper,
  Time,
  TimeLabel,
  Title,
  DetailWapper,
  RemoveButton,
} from './styles';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  };
  handleRemove: () => void;
}

const imageSize = layout.scale() * 56;

export default React.memo(({ data, handleRemove, ...props }: PlantProps) => {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <RemoveButton onPress={handleRemove}>
            <Feather name="trash" size={layout.scale() * 32} color={colors.white} />
          </RemoveButton>
        </Animated.View>
      )}>
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
    </Swipeable>
  );
});

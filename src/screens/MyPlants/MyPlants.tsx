import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { images, navigations } from '@/constants';
import { Header } from '@/components';
import { IPlants } from '@/interfaces';

import { Container, HeaderWapper, Spotlight, SpotlightImage } from './styles';

export default ({ plantsStorage }) => {
  const { navigate } = useNavigation();

  const [] = useState<IPlants[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [nextWaterd, setNextWaterd] = useState<string>('');

  useEffect(() => {}, []);

  return (
    <Container>
      <HeaderWapper>
        <Header />
      </HeaderWapper>

      <Spotlight>
        <SpotlightImage source={images.waterdrop} />
      </Spotlight>
    </Container>
  );
};

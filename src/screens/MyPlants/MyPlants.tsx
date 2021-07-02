import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { images, navigations } from '@/constants';
import { Header, PlantLargeCard } from '@/components';
import { IPlants } from '@/interfaces';

import {
  Container,
  HeaderWapper,
  Plants,
  PlantsList,
  PlantsTitle,
  Spotlight,
  SpotlighText,
  SpotlightImage,
} from './styles';

export default ({ plantsStoraged }) => {
  const { navigate } = useNavigation();
  const [loading, setLoading] = useState<boolean>(true);
  const [nextWaterd, setNextWaterd] = useState<string>('');

  useEffect(() => {
    const nextTime = formatDistance(
      new Date(plantsStoraged[0].dateTimeNotification).getTime(),
      new Date().getTime(),
      { locale: ptBR }
    );
    setNextWaterd(`Não esqueça de reagar a ${plantsStoraged[0].name} à ${nextTime} horas.`);

    setLoading(false);
  }, []);

  return (
    <Container>
      <HeaderWapper>
        <Header />
      </HeaderWapper>

      <Spotlight>
        <SpotlightImage source={images.waterdrop} />
        <SpotlighText>{nextWaterd}</SpotlighText>
      </Spotlight>

      <Plants>
        <PlantsTitle>Próximas regadas</PlantsTitle>
        <PlantsList
          renderItem={({ item }) => <PlantLargeCard data={item} />}
          keyExtractor={item => String(item.id)}
          showsVerticalScrollIndicator={false}
          data={plantsStoraged}
        />
      </Plants>
    </Container>
  );
};

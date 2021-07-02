import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { images } from '@/constants';
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

export default ({ plantsStoraged, removePlant }) => {
  const [nextWaterd, setNextWaterd] = useState<string>('');

  useEffect(() => {
    if (plantsStoraged.length > 0) {
      const nextTime = formatDistance(
        new Date(plantsStoraged[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: ptBR }
      );
      setNextWaterd(`Não esqueça de reagar a ${plantsStoraged[0].name} à ${nextTime}.`);
    }
  }, [plantsStoraged]);

  const handleRemove = (plant: IPlants) => () => {
    Alert.alert('Remover', `Deseja remover a ${plant.name}?`, [
      { text: 'Não 🙏', style: 'cancel' },
      { text: 'Sim 😥', onPress: () => removePlant(plant) },
    ]);
  };

  return (
    <Container>
      <HeaderWapper>
        <Header />
      </HeaderWapper>

      {plantsStoraged.length > 0 && (
        <>
          <Spotlight>
            <SpotlightImage source={images.waterdrop} />
            <SpotlighText>{nextWaterd}</SpotlighText>
          </Spotlight>
          <Plants>
            <PlantsTitle>Próximas regadas</PlantsTitle>
            <PlantsList
              renderItem={({ item }) => (
                <PlantLargeCard handleRemove={handleRemove(item)} data={item} />
              )}
              keyExtractor={item => String(item.uuid)}
              showsVerticalScrollIndicator={false}
              data={plantsStoraged}
            />
          </Plants>
        </>
      )}
    </Container>
  );
};

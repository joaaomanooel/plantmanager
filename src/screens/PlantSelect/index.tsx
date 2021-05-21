import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

import { EnvironmentsButton, Header, PlantCard } from '@/components';
import { environments as environmentsService, plants as plantService } from '@/services';
import { IEnvironments, IPlants } from '@/interfaces';

import {
  Container,
  EnvironmentsList,
  HeaderWapper,
  PlantsList,
  PlantsListWapper,
  SubTitle,
  Title
} from './styles';

export default () => {
  const { navigate } = useNavigation();
  const [environments, setEnvironments] = useState<IEnvironments[]>([]);
  const [plants, setPlants] = useState<IPlants[]>([]);

  useEffect(() => {
    async function fetchEvironments() {
      const { data } = await environmentsService.getAll({});
      setEnvironments([{ key: 'all', title: 'Todos' }, ...data]);
    }
    fetchEvironments();
  }, []);

  useEffect(() => {
    async function fetchPlants() {
      const { data } = await plantService.getAll({});
      setPlants(data);
    }
    fetchPlants();
  }, []);

  return (
    <Container>
      <HeaderWapper>
        <Header />
        <Title>Em qual hambiente</Title>
        <SubTitle>você quer colocar sua planta?</SubTitle>
      </HeaderWapper>
      <View>
        <EnvironmentsList
          renderItem={({ item }) => <EnvironmentsButton text={item.title} />}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.key}
          data={environments}
          horizontal={true}
        />
      </View>
      <PlantsListWapper>
        <PlantsList
          renderItem={({ item }) => <PlantCard key={item.id} data={item} />}
          keyExtractor={(item) => `${item.id}-${item.name}`}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={plants}
        />
      </PlantsListWapper>
    </Container>
  );
};

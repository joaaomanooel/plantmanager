import React, { useEffect, useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RefreshControl, View } from 'react-native';

import { EnvironmentsButton, Header, PlantCard, Load } from '@/components';
import { environments as environmentsService, plants as plantService } from '@/services';
import { IEnvironments, IPlants } from '@/interfaces';
import { colors } from '@/constants';

import {
  Container,
  EnvironmentsList,
  HeaderWapper,
  PlantsList,
  PlantsListWapper,
  SubTitle,
  Title
} from './styles';

const allEnvironments = { key: 'all', title: 'Todos' };

export default () => {
  const { navigate } = useNavigation();

  const [environmentSelected, setEnvironmentSelected] = useState<string>(allEnvironments.key);
  const [environments, setEnvironments] = useState<IEnvironments[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<IPlants[]>([]);
  const [plants, setPlants] = useState<IPlants[]>([]);
  const [startupLoading, setStartupLoading] = useState(false);

  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loadedAll, setLoadedAll] = useState(false);
  const [page, setPage] = useState(1);

  const fetchEvironments = useCallback(async () => {
    const { data } = await environmentsService.getAll({});
    setEnvironments([allEnvironments, ...data]);
  }, [setEnvironments]);

  const fetchPlants = useCallback(async () => {
    const { data } = await plantService.getAll({ page: 1 });

    if (!data) return setLoading(false);
    if (page > 1) setPlants((oldValue) => [...oldValue, ...data]);

    setPlants(data);
  }, [page]);

  const startup = useCallback(async () => {
    setStartupLoading(true);

    await fetchEvironments();
    await fetchPlants();

    setStartupLoading(false);
  }, [fetchEvironments, fetchPlants]);

  const handleFetchMore = useCallback((distance: number) => {
    if (distance < 1) return;

    setLoadingMore(true);
    setPage((oldValue) => oldValue + 1);
  }, []);

  const handleOnRefreshControl = useCallback(async () => {
    setLoading(true);
    await fetchPlants();
    setLoading(false);
  }, [fetchPlants]);

  const handleRefresh = useCallback(() => {
    return (
      <RefreshControl
        tintColor="green"
        colors={[colors.green_dark]}
        refreshing={loading}
        onRefresh={handleOnRefreshControl}
      />
    );
  }, [handleOnRefreshControl, loading]);

  const handleEnvironmentsButton = useCallback(
    (item: IEnvironments) => setEnvironmentSelected(item.key),
    [setEnvironmentSelected]
  );

  const filterPlants = useCallback(() => {
    if (environmentSelected === allEnvironments.key) return setFilteredPlants(plants);

    const filtered = plants.filter((plant) => plant.environments.includes(environmentSelected));
    setFilteredPlants(filtered);
  }, [environmentSelected, plants]);

  useEffect(() => {
    filterPlants();
  }, [environmentSelected, filterPlants, plants]);

  useEffect(() => {
    startup();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (startupLoading) return <Load />;
  return (
    <Container>
      <HeaderWapper>
        <Header />
        <Title>Em qual hambiente</Title>
        <SubTitle>você quer colocar sua planta?</SubTitle>
      </HeaderWapper>
      <View>
        <EnvironmentsList
          renderItem={({ item }) => (
            <EnvironmentsButton
              onPress={() => item.key !== environmentSelected && handleEnvironmentsButton(item)}
              active={item.key === environmentSelected}
              text={item.title}
            />
          )}
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
          refreshControl={handleRefresh()}
          data={filteredPlants}
          numColumns={2}
        />
      </PlantsListWapper>
    </Container>
  );
};

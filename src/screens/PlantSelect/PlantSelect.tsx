import React, { useEffect, useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RefreshControl, View, ActivityIndicator } from 'react-native';

import { EnvironmentsButton, Header, PlantCard, Load } from '@/components';
import { IEnvironments, IPlants } from '@/interfaces';
import { colors, navigations } from '@/constants';

import {
  Container,
  EnvironmentsList,
  HeaderWapper,
  PlantsList,
  PlantsListWapper,
  SubTitle,
  Title,
} from './styles';

const allEnvironments = { key: 'all', title: 'Todos' };

export default ({
  plants,
  getPlants,
  getEnvironments,
  loadingEnvironments,
  loadingPlants,
  environments,
}) => {
  const { navigate } = useNavigation();

  const [environmentSelected, setEnvironmentSelected] = useState<string>(allEnvironments.key);
  const [filteredPlants, setFilteredPlants] = useState<IPlants[]>(plants);

  const [loadingRefresh, setLoadingRefresh] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loadedAll, setLoadedAll] = useState(false);
  const [page, setPage] = useState(1);

  const filterPlants = useCallback(
    env => {
      if (env === allEnvironments.key) return setFilteredPlants(plants);
      const filtered = plants.filter(plant => plant.environments.includes(env));
      setFilteredPlants(filtered);
    },
    [plants]
  );

  const handleEnvironmentsButton = useCallback(
    (item: IEnvironments) => {
      setEnvironmentSelected(item.key);
      filterPlants(item.key);
    },
    [filterPlants]
  );

  useEffect(() => {
    filterPlants(environmentSelected);
  }, [environmentSelected, filterPlants, plants]);

  const handleFetchMore = (distance: number) => {
    if (!loadingPlants && !loadingMore && distance > 1) {
      setPage(page + 1);

      setLoadingMore(true);
      getPlants({ page: page + 1 });
    }
  };

  const handleOnRefreshControl = useCallback(() => {
    setLoadingRefresh(true);
    setPage(1);

    getPlants({ page: 1 });
  }, [getPlants]);

  const handleRefresh = useCallback(() => {
    return (
      <RefreshControl
        tintColor="green"
        colors={[colors.green_dark]}
        refreshing={loadingRefresh}
        onRefresh={handleOnRefreshControl}
      />
    );
  }, [handleOnRefreshControl, loadingRefresh]);

  const handlePlantSelect = (plant: IPlants) => {
    navigate(navigations.PlantSave, { plant });
  };

  useEffect(() => {
    getEnvironments({});
    getPlants({ page: 1 });
  }, []);

  useEffect(() => {
    if (!loadingPlants) {
      setLoadingRefresh(false);
      setLoadingMore(false);
    }
  }, [loadingPlants]);

  if ((loadingPlants || loadingEnvironments) && !loadingMore && !loadingRefresh) return <Load />;
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
          keyExtractor={item => item.key}
          data={environments}
          horizontal={true}
        />
      </View>
      <PlantsListWapper>
        <PlantsList
          numColumns={2}
          data={filteredPlants}
          refreshControl={handleRefresh()}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <PlantCard data={item} onPress={() => handlePlantSelect(item)} />
          )}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
          ListFooterComponent={loadingMore ? <ActivityIndicator color={colors.green} /> : null}
        />
      </PlantsListWapper>
    </Container>
  );
};

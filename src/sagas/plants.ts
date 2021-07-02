import { call, put, select } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { Alert } from 'react-native';
import { format } from 'date-fns';

import * as plantsActions from '@/redux/plants';
import { plants as plantsServices } from '@/services';
import { IPlants, IServicesGet } from '@/interfaces';

const addHour = currentPlant => ({
  ...currentPlant,
  hour: format(new Date(currentPlant.dateTimeNotification), 'HH:mm'),
});

const getTimeValue = dateTime => Math.floor(new Date(dateTime).getTime() / 1000);

const sortByData = (a: IPlants, b: IPlants) =>
  Math.floor(getTimeValue(a.dateTimeNotification) - getTimeValue(b.dateTimeNotification));

export function* getPlants({ payload }: { type: string; payload: IServicesGet }) {
  try {
    const currentPlants = yield select(state => state.plants.list);
    const plants: AxiosResponse = yield call(plantsServices.getAll, payload);
    yield put(
      plantsActions.getPlantsSuccess(
        payload.page === 1 ? plants.data : [...currentPlants, ...plants.data]
      )
    );
  } catch (error) {
    yield put(plantsActions.getPlantsFailure());
  }
}

export function* removePlant({ payload }: { type: string; payload: IPlants }) {
  try {
    const currentStoragePlants: IPlants[] = yield select(state => state.plants.storage);

    const storegedPlants: IPlants[] = currentStoragePlants
      .filter(plant => plant.id !== payload.id)
      .sort(sortByData);

    yield put(plantsActions.removePlantSuccess(storegedPlants));
  } catch (error) {
    Alert.alert('Não foi possivel remover! 😥');
    yield put(plantsActions.removePlantFailure());
  }
}

export function* savePlant({ payload }: { type: string; payload: IPlants }) {
  try {
    const currentStoragePlants: IPlants[] = yield select(state => state.plants.storage);

    const storegedPlants: IPlants[] = [...currentStoragePlants, payload]
      .map(addHour)
      .sort(sortByData);

    yield put(plantsActions.savePlantSuccess(storegedPlants));
  } catch (error) {
    Alert.alert('Não foi possivel salvar! 😥');
    yield put(plantsActions.savePlantFailure());
  }
}

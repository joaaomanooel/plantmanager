import { call, put, select } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { Alert } from 'react-native';
import { format } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
import * as Notifications from 'expo-notifications';

import * as plantsActions from '@/redux/plants';
import { plants as plantsServices, notifications as notificationsServices } from '@/services';
import { IPlants, IServicesGet } from '@/interfaces';

const addInfo = customData => currentPlant => ({
  ...currentPlant,
  ...customData,
  uuid: uuidv4(),
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
    yield call(notificationsServices.cancelScheduledNotification, payload.notificationId);
    const currentStoragePlants: IPlants[] = yield select(state => state.plants.storage);

    const storegedPlants: IPlants[] = currentStoragePlants
      .filter(plant => plant.uuid !== payload.uuid)
      .sort(sortByData);

    yield put(plantsActions.removePlantSuccess(storegedPlants));
  } catch (error) {
    Alert.alert('Não foi possivel remover! 😥');
    yield put(plantsActions.removePlantFailure());
  }
}

export function* savePlant({ payload }: { type: string; payload: IPlants }) {
  try {
    const notificationId: string = yield call(notificationsServices.scheduleNotification, payload);
    const currentStoragePlants: IPlants[] = yield select(state => state.plants.storage);

    const storegedPlants: IPlants[] = [...currentStoragePlants, payload]
      .map(addInfo({ notificationId }))
      .sort(sortByData);

    const notificartionsList = yield call(Notifications.getAllScheduledNotificationsAsync);

    yield put(plantsActions.savePlantSuccess(storegedPlants));
  } catch (error) {
    console.log('[SAVE ERROR]:', error);
    Alert.alert('Não foi possivel salvar! 😥');
    yield put(plantsActions.savePlantFailure());
  }
}

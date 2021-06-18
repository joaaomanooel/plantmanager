import { call, put, select } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import * as plantsActions from '@/redux/plants';
import { plants as plantsServices } from '@/services';
import { IServicesGet } from '@/interfaces';

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

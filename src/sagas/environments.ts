import { call, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import * as environmentsActions from '@/redux/environments';
import { environments as environmentsServices } from '@/services';
import { IServicesGet, IEnvironments } from '@/interfaces';

const allEnvironments: IEnvironments = { key: 'all', title: 'Todos' };

export function* getEnvironments({ payload }: { type: string; payload: IServicesGet }) {
  try {
    const response: AxiosResponse = yield call(environmentsServices.getAll, payload);
    const environments: IEnvironments[] = [allEnvironments, ...response.data];
    yield put(environmentsActions.getEnvironmentsSuccess(environments));
  } catch (error) {
    console.log(error);
    yield put(environmentsActions.getEnvironmentsFailure());
  }
}

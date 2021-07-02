import { all, fork, takeLatest } from 'redux-saga/effects';
import { networkSaga } from 'react-native-offline';

/* ---------------- Types --------------- */
import { actions as actionsTypes } from '@/constants';

/* ---------------- Sagas --------------- */
import * as plantsSagas from './plants';
import * as environmentsSagas from './environments';

/* ------- Connect Types To Sagas ------- */
export default function* root() {
  yield all([
    // Offline
    fork(networkSaga),

    // Plants
    takeLatest(actionsTypes.getPlants('REQUEST'), plantsSagas.getPlants),
    takeLatest(actionsTypes.savePlant('REQUEST'), plantsSagas.savePlant),
    takeLatest(actionsTypes.removePlant('REQUEST'), plantsSagas.removePlant),

    // Environments
    takeLatest(actionsTypes.getEnvironments('REQUEST'), environmentsSagas.getEnvironments),
  ]);
}

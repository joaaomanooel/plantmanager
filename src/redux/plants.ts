import { createAction, createReducer } from '@reduxjs/toolkit';
import { format } from 'date-fns';

import { IPlants, IServicesGet } from '@/interfaces';
import { actions } from '@/constants';

function withPayload<T>() {
  return (t: T) => ({ payload: t });
}

const { getPlants, removePlant, savePlant } = actions;

export const getPlantsRequest = createAction(getPlants('REQUEST'), withPayload<IServicesGet>());
export const getPlantsSuccess = createAction(getPlants('SUCCESS'), withPayload<IPlants>());
export const getPlantsFailure = createAction(getPlants('FAILURE'));

export const removePlantRequest = createAction(removePlant('REQUEST'), withPayload<IPlants>());
export const removePlantSuccess = createAction(removePlant('SUCCESS'), withPayload<IPlants[]>());
export const removePlantFailure = createAction(removePlant('FAILURE'));

export const savePlantRequest = createAction(savePlant('REQUEST'), withPayload<IPlants>());
export const savePlantSuccess = createAction(savePlant('SUCCESS'), withPayload<IPlants[]>());
export const savePlantFailure = createAction(savePlant('FAILURE'));

interface InitialState {
  list: IPlants[];
  storage: IPlants[];
}

const INITIAL_STATE: InitialState = { list: [], storage: [] };

export default createReducer(INITIAL_STATE, {
  [getPlantsSuccess.type]: (state, { payload }) => ({ ...state, list: payload }),
  [removePlantSuccess.type]: (state, { payload }) => ({ ...state, storage: payload }),
  [savePlantSuccess.type]: (state, { payload }) => ({ ...state, storage: payload }),
});

import { createAction, createReducer } from '@reduxjs/toolkit';
import { IPlants, IServicesGet } from '@/interfaces';
import { actions } from '@/constants';

function withPayload<T>() {
  return (t: T) => ({ payload: t });
}

const { getPlants } = actions;

export const getPlantsRequest = createAction(getPlants('REQUEST'), withPayload<IServicesGet>());
export const getPlantsSuccess = createAction(getPlants('SUCCESS'), withPayload<IPlants>());
export const getPlantsFailure = createAction(getPlants('FAILURE'));

const INITIAL_STATE = { list: [] };

export default createReducer(INITIAL_STATE, {
  [getPlantsSuccess.type]: (state, { payload }) => ({ ...state, list: payload }),
});
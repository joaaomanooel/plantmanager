import { createAction, createReducer } from '@reduxjs/toolkit';
import { IUser } from '@/interfaces';
// import { actions } from '@/constants';

function withPayload<T>() {
  return (t: T) => ({ payload: t });
}

// const { getPlants } = actions;

// export const getPlantsRequest = createAction(getPlants('REQUEST'), withPayload<IServicesGet>());
// export const getPlantsSuccess = createAction(getPlants('SUCCESS'), withPayload<IPlants>());
// export const getPlantsFailure = createAction(getPlants('FAILURE'));

export const setUser = createAction('SET_USER', withPayload<IUser>());

const INITIAL_STATE = { data: {} };

export default createReducer(INITIAL_STATE, {
  [setUser.type]: (state, { payload }) => ({ ...state, data: payload }),
});

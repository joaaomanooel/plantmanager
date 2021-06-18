import { createAction, createReducer } from '@reduxjs/toolkit';
import { IEnvironments, IServicesGet } from '@/interfaces';
import { actions } from '@/constants';

function withPayloadType<T>() {
  return (t: T) => ({ payload: t });
}

export const getEnvironmentsRequest = createAction(
  actions.getEnvironments('REQUEST'),
  withPayloadType<IServicesGet>()
);
export const getEnvironmentsSuccess = createAction(
  actions.getEnvironments('SUCCESS'),
  withPayloadType<IEnvironments[]>()
);
export const getEnvironmentsFailure = createAction(actions.getEnvironments('FAILURE'));

const INITIAL_STATE = { list: [] };

export default createReducer(INITIAL_STATE, {
  [getEnvironmentsSuccess.type]: (state, { payload }) => ({ ...state, list: payload }),
});

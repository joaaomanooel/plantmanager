import { createAction, createReducer } from '@reduxjs/toolkit';
// import * as authActions from './auth';

interface FetchRequestPayload {
  requestName: string;
  requestState: string;
}

function withPayloadType<T>() {
  return (t: T) => ({ payload: t });
}

export const actions = {
  fetchRequest: createAction('FETCH_UPDATE', withPayloadType<FetchRequestPayload>()),
  clearFetch: createAction('CLEAR_FETCH'),
};

export const selectors = {
  getNetworkError: (action: string, state) => state.fetch[action] === 'NETWORK_ERROR' || false,
  getFetching: (action: string, state) => state.fetch[action] === 'REQUEST' || false,
  getSuccess: (action: string, state) => state.fetch[action] === 'SUCCESS' || false,
  getError: (action: string, state) => state.fetch[action] === 'FAILURE' || false,
};

const INITIAL_STATE = {};

export default createReducer(INITIAL_STATE, {
  [actions.fetchRequest.type]: (state, { payload }) => {
    const { requestName, requestState } = payload;
    return { ...state, [requestName]: requestState };
  },
  [actions.clearFetch.type]: (state, { payload }) => ({ ...state, [payload]: false }),
  // [authActions.resetData]: () => INITIAL_STATE,
});

import { createAction, createReducer } from '@reduxjs/toolkit';
import { format } from 'date-fns';

import { IPlants, IServicesGet } from '@/interfaces';
import { actions } from '@/constants';

function withPayload<T>() {
  return (t: T) => ({ payload: t });
}

const { getPlants } = actions;

export const setPlant = createAction('SET_PLANT', withPayload<IPlants>());

export const getPlantsRequest = createAction(getPlants('REQUEST'), withPayload<IServicesGet>());
export const getPlantsSuccess = createAction(getPlants('SUCCESS'), withPayload<IPlants>());
export const getPlantsFailure = createAction(getPlants('FAILURE'));

interface InitialState {
  list: IPlants[];
  storage: IPlants[];
}

const INITIAL_STATE: InitialState = { list: [], storage: [] };

function handlePlantsStorage(state: InitialState, plant: IPlants): IPlants[] {
  const addHour = currentPlant => ({
    ...currentPlant,
    hour: format(new Date(currentPlant.dateTimeNotification), 'HH:mm'),
  });

  const getTimeValue = dateTime => Math.floor(new Date(dateTime).getTime() / 1000);

  const sortByData = (a: IPlants, b: IPlants) =>
    Math.floor(getTimeValue(a.dateTimeNotification) - getTimeValue(b.dateTimeNotification));

  return [...state.storage, plant].map(addHour).sort(sortByData) as IPlants[];
}

export default createReducer(INITIAL_STATE, {
  [getPlantsSuccess.type]: (state, { payload }) => ({ ...state, list: payload }),
  [setPlant.type]: (state, { payload }) => ({
    ...state,
    storage: handlePlantsStorage(state, payload),
  }),
});

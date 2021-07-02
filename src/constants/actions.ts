declare type ActionsTypes = 'REQUEST' | 'SUCCESS' | 'FAILURE';

const composeActionType = (shortActionName: string) => (e?: ActionsTypes) => {
  return e ? `${shortActionName}_${e}` : shortActionName;
};

export default {
  getPlants: composeActionType('GET_PLANTS'),
  savePlant: composeActionType('SAVE_PLANTS'),
  removePlant: composeActionType('REMOVE_PLANTS'),
  getEnvironments: composeActionType('GET_ENVIRONMENTS'),
};

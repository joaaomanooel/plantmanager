/* eslint-disable @typescript-eslint/no-var-requires */
import { combineReducers } from 'redux';
import { reducer as network } from 'react-native-offline';
import rootSaga from '@/sagas';
import configureStore from './configureStore';

const reducers = combineReducers({
  environments: require('./environments').default,
  fetch: require('./fetch').default,
  plants: require('./plants').default,
  user: require('./user').default,
  network,
});

export default () => {
  const { store, persistor } = configureStore(reducers, rootSaga);

  return { store, persistor };
};

import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import ReactotronConfig from '@/config/reactotronConfig';
import Reactotron from 'reactotron-react-native';
import { createNetworkMiddleware } from 'react-native-offline';
import { fetchMiddleware } from './middlewares';
// import * as demandsActions from './demands';

const rootPersistConfig = { key: 'root', timeout: 10000, storage: AsyncStorage };

export default (reducers, rootSaga) => {
  const middleware = [];
  const enhancers = [];

  // Saga
  // @ts-ignore
  const sagaMiddkewareConfig = __DEV__ ? { sagaMonitor: Reactotron?.createSagaMonitor() } : {};
  const sagaMiddleware = createSagaMiddleware(sagaMiddkewareConfig);

  // Network
  const networkMiddleware = createNetworkMiddleware({
    // actionTypes: [
    //   demandsActions.createDemandOfflineRequest().type,
    //   demandsActions.uploadDemandAttachmentRequest().type,
    // ],
  });

  middleware.push(networkMiddleware);
  middleware.push(sagaMiddleware);
  middleware.push(fetchMiddleware);

  // Apply Middleware
  enhancers.push(applyMiddleware(...middleware));
  // @ts-ignore
  if (__DEV__) enhancers.push(ReactotronConfig?.createEnhancer());

  // Compose
  const devtoolsConfig = { hostname: 'localhost', port: 8000 };
  const composeEnhancers = __DEV__ ? composeWithDevTools(devtoolsConfig) : compose;
  // Store
  const rootReducer = persistReducer(rootPersistConfig, reducers);
  // @ts-ignore
  const store = createStore(rootReducer, composeEnhancers(...enhancers));
  const persistor = persistStore(store);

  // Kick off root saga
  const sagasManager = sagaMiddleware.run(rootSaga);

  return { store, persistor, sagasManager, sagaMiddleware };
};

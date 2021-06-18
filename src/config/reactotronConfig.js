/* eslint-disable no-console */
import Reactotron, {
  asyncStorage,
  trackGlobalErrors,
  openInEditor,
  overlay,
  networking,
} from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';
import sagaPlugin from 'reactotron-redux-saga';
import { reactotronRedux } from 'reactotron-redux';

const handleReactotron = () => {
  const tron = Reactotron.configure({ name: 'PlantManager' })
    .setAsyncStorageHandler(AsyncStorage)
    .use(reactotronRedux())
    .use(asyncStorage())
    .use(sagaPlugin())
    .use(overlay())
    .use(trackGlobalErrors())
    .use(openInEditor())
    .use(networking())
    .useReactNative({ asyncStorage: true })
    .connect();

  tron.clear();

  console.tron = tron;
  return tron;
};

const reactotron = __DEV__ ? handleReactotron() : undefined;

export default reactotron;

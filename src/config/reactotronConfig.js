/* eslint-disable no-console */
import Reactotron, {
  asyncStorage,
  trackGlobalErrors,
  openInEditor,
  overlay,
  networking,
} from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';

const handleReactotron = () => {
  const tron = Reactotron.configure({ name: 'PlantManager' })
    .setAsyncStorageHandler(AsyncStorage)
    .use(asyncStorage())
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

/* eslint-disable no-nested-ternary */
import { version } from './package.json';

const name = 'PlantManager';
const displayName = 'Plant Manager';

export default {
  name,
  displayName,
  owner: 'joaaomanooel',
  orientation: 'portrait',
  privacy: 'public',
  expo: {
    name: displayName,
    slug: name,
    version,
    assetBundlePatterns: ['*'],
  },
  android: {
    publishManifestPath: 'android/app/src/main/assets/shell-app-manifest.json',
    publishBundlePath: 'android/app/src/main/assets/shell-app.bundle',
  },
  ios: {
    publishManifestPath: 'ios/cmpc/Supporting/shell-app-manifest.json',
    publishBundlePath: 'ios/cmpc/Supporting/shell-app.bundle',
  },
};

/* eslint-disable no-nested-ternary */
import { version } from './package.json';

const { FASTLANE_BUILD_ENVIRONMENT = 'qa' } = process.env;

const name =
  FASTLANE_BUILD_ENVIRONMENT === 'staging'
    ? 'PlantManager-staging'
    : FASTLANE_BUILD_ENVIRONMENT === 'qa'
    ? 'PlantManager-qa'
    : 'PlantManager';

const bundle =
  FASTLANE_BUILD_ENVIRONMENT === 'staging'
    ? 'com.plantmanager.staging'
    : FASTLANE_BUILD_ENVIRONMENT === 'qa'
    ? 'com.plantmanager.qa'
    : 'com.plantmanager';

const displayName =
  FASTLANE_BUILD_ENVIRONMENT === 'staging'
    ? 'PlantManager Staging'
    : FASTLANE_BUILD_ENVIRONMENT === 'qa'
    ? 'PlantManager QA'
    : 'PlantManager';

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
    assetBundlePatterns: ['**/*'],
    orientation: 'portrait',
    updates: {
      fallbackToCacheTimeout: 0
    },
    splash: {
      image: './assets/splash.png',
      backgroundColor: '#ffffff',
      resizeMode: 'contain'
    }
  },
  android: {
    publishManifestPath: 'android/app/src/main/assets/shell-app-manifest.json',
    publishBundlePath: 'android/app/src/main/assets/shell-app.bundle',
    package: bundle
  },
  ios: {
    publishManifestPath: 'ios/cmpc/Supporting/shell-app-manifest.json',
    publishBundlePath: 'ios/cmpc/Supporting/shell-app.bundle',
    package: bundle
  },
  web: {
    favicon: './assets/favicon.png'
  }
};

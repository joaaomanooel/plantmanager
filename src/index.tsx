import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Updates from 'expo-updates';
import { StyleSheet, Text, View } from 'react-native';

import Welcome from './screens/Wellcome';

export default function App() {

  useEffect(() => {
    async function updateApp() {
      const { isAvailable } = await Updates.checkForUpdateAsync();

      if (isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    }

    updateApp();
  }, [])

  return (
    <>
      <StatusBar style="auto" />
      <Welcome />
    </>
  );
}

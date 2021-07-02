import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { colors, navigations } from '@/constants';

// -- IMPORT SCREEN --
import PlantSave from '@/screens/PlantSave';
import Wellcome from '@/screens/Wellcome';
import UserIndentification from '@/screens/UserIndentification';
import Confirmation from '@/screens/Confirmation';
import Home from './TabNavigation';

const Stack = createStackNavigator();

export default ({ user }) => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{ cardStyle: { backgroundColor: colors.white } }}
      initialRouteName={!user.username ? navigations.Wellcome : navigations.Home}
      detachInactiveScreens
      headerMode="none">
      {!user.username ? (
        <>
          <Stack.Screen name={navigations.Wellcome} component={Wellcome} />
          <Stack.Screen name={navigations.UserIndentification} component={UserIndentification} />
          <Stack.Screen name={navigations.Confirmation} component={Confirmation} />
        </>
      ) : (
        <>
          <Stack.Screen name={navigations.Home} component={Home} />
          <Stack.Screen name={navigations.PlantSave} component={PlantSave} />
          <Stack.Screen name={navigations.Confirmation} component={Confirmation} />
        </>
      )}
    </Stack.Navigator>
  </NavigationContainer>
);

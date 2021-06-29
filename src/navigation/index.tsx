import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { colors, navigations } from '@/constants';

// -- IMPORT SCREEN --
import PlantSelect from '@/screens/PlantSelect';
import Wellcome from '@/screens/Wellcome';
import UserIndentification from '@/screens/UserIndentification';
import Confirmation from '@/screens/Confirmation';

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{ cardStyle: { backgroundColor: colors.white } }}
      initialRouteName={navigations.Wellcome}
      headerMode="none">
      <Stack.Screen name={navigations.Wellcome} component={Wellcome} />
      <Stack.Screen name={navigations.UserIndentification} component={UserIndentification} />
      <Stack.Screen name={navigations.Confirmation} component={Confirmation} />
      <Stack.Screen name={navigations.PlantSelect} component={PlantSelect} />
    </Stack.Navigator>
  </NavigationContainer>
);

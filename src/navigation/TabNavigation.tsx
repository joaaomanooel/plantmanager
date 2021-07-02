import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import { colors, layout, navigations } from '@/constants';

import PlantSelect from '@/screens/PlantSelect';
import MyPlants from '@/screens/MyPlants';

const Tab = createBottomTabNavigator();

const AuthNavigation = () => {
  return (
    <Tab.Navigator
      detachInactiveScreens
      tabBarOptions={{
        activeTintColor: colors.green,
        inactiveTintColor: colors.heading,
        labelPosition: 'beside-icon',
        style: {
          paddingVertical: layout.scale() * 20,
          height: layout.scale() * 88,
        },
      }}>
      <Tab.Screen
        name={navigations.PlantSelect}
        component={PlantSelect}
        options={{
          tabBarLabel: 'Nova planta',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="add-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={navigations.MyPlants}
        component={MyPlants}
        options={{
          tabBarLabel: 'Minhas plantinhas',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="format-list-bulleted" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AuthNavigation;

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from '../screens/Homescreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
          headerShown: false
      }}
    >
      <Stack.Screen name="HomeScreen" component={Homescreen} />
    </Stack.Navigator>
  );
}
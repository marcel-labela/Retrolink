//TODO: Dit bestand nog even typen
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './TabNavigator';

const MainStack = createStackNavigator<any>();

const MainNavigator: React.FC = () => (
  <MainStack.Navigator
    initialRouteName="TabNavigator"
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
    }}
  >
    <MainStack.Screen name="TabNavigator" component={TabNavigator} />
  </MainStack.Navigator>
);

export default MainNavigator;

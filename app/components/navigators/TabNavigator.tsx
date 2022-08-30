import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import theme from 'styles/theme';

import { HomeScreen, ProfileScreen } from 'screens';
import { Home, Profile } from 'components/common/svg';

const TabsStack = createBottomTabNavigator();

// TODO: Manage all navigator files, I have the feeling this can be done better.

const TabNavigator = () => (
  <TabsStack.Navigator
    initialRouteName="DashboardTab"
    screenOptions={{
      ...theme.navigation.tabBar,
    }}
  >
    <TabsStack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, focused }) => {
        return (
          <Home
            width={20}
            height={21}
            focused={focused}
            fill={color}
          />
        )},
          headerTitle: 'Home',
          tabBarLabel: 'Home',
          headerShown: false,
        }}
    />
    <TabsStack.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <Profile width={20} height={19} fill={color} />
        ),
          headerTitle: 'My Retrolink',
          tabBarLabel: 'My Retrolink',
          headerShown: false,
        }}
    />
  </TabsStack.Navigator>
)

export default TabNavigator;
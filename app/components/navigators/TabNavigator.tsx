import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen, ProfileScreen } from 'screens';
import { Home, Profile } from 'components/common/svg';

const TabsStack = createBottomTabNavigator();

//TODO: Stop tabbarlabel styles in de theme file.
// TODO: Manage all navigator files, I have the feeling this can be done better.

const TabNavigator = () => (
  <TabsStack.Navigator
    initialRouteName="DashboardTab"
    screenOptions={{
      tabBarLabelStyle: {
        paddingHorizontal: 1,
        fontSize: 14,
      },
      tabBarStyle: {
        paddingBottom: 18,
        height: 72,
      },
      tabBarIconStyle: {
        bottom: -4,
      }
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
          headerShown: true,
        }}
    />
    <TabsStack.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <Profile width={20} height={19} fill="red" />
        ),
          headerTitle: 'My Retrolink',
          tabBarLabel: 'My Retrolink',
          headerShown: true,
        }}
    />
  </TabsStack.Navigator>
)

export default TabNavigator;
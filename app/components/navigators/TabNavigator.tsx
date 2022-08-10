import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen, ProfileScreen } from 'screens';
import { Home, Profile } from 'components/common/svg';
// import theme from 'constants/styles/theme';

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
        tabBarIcon: ({ color, focused }) => (
          <Home
            width={20}
            height={21}
            focused={focused}
            fill="red"
          />
        ),
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
    {/* Hier moet dan een andere navigator bij. */}
  </TabsStack.Navigator>
)

export default TabNavigator;
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen, ProfileScreen } from 'screens';
import { Home, Profile } from 'components/common/svg';
import theme from 'constants/styles/theme';

const TabsStack = createBottomTabNavigator();

//TODO: Stop tabbarlabel styles in de theme file.
// TODO: Manage all navigator files, I have the feeling this can be done better.

const TabNavigator = () => (
  <TabsStack.Navigator
    initialRouteName="DashboardTab"
    screenOptions={{
      ...theme.navigation.header,
      tabBarLabelStyle: {
        paddingHorizontal: 1,
        color: theme.colors.white,
        fontSize: 14,
        fontFamily: theme.fonts[400],
      },
      tabBarStyle: {
        paddingBottom: 18,
        height: 72,
        backgroundColor: theme.colors.primary,
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
            fill={theme.colors.white}
            focused={focused}
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
          <Profile width={20} height={19} fill={theme.colors.white} />
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
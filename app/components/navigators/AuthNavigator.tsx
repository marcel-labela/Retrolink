import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuthenticationUser } from '../../hooks/useAuthentication';

import MainNavigator from './MainNavigator';
import { LoginScreen, RegisterScreen } from 'screens';

// @TODO: Fix hier die types nog even.
// Ipv TabOneScreen moet je een andere navigator renderen.
const AuthStack = createStackNavigator<any>();

const AuthNavigator = () => {
  const { authenticated, determined } = useAuthenticationUser();

  return (
    <AuthStack.Navigator
      initialRouteName="AuthLoading"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      {authenticated && determined ? (
        // Dit moet dan weer een navigator worden.
        <AuthStack.Screen name="TabOneScreen" component={MainNavigator} />
      ): (
        <>
          <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
          <AuthStack.Screen name="RegisterScreen" component={RegisterScreen} />
        </>
      )}
    </AuthStack.Navigator>
  )
}

export default AuthNavigator;
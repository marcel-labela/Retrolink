import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from '../components/navigators/AuthNavigator';

export default function Navigation() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

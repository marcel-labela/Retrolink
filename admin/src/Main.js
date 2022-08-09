import React from 'react';
import { ScreenContainer } from './components';

import { useAuthenticationUser } from './customHooks/useAuthentication';
import HomeScreen from './screens/Homescreen';
import LoginScreen from './screens/Loginscreen';

export const Main = () => {
  const { authenticated: isAuthenticated, determined: isDetermined } = useAuthenticationUser();

  return (
   <ScreenContainer placement='center'>
    {isAuthenticated && isDetermined ? (
      <HomeScreen />
    ) : (
      <LoginScreen />
    )}
   </ScreenContainer>
  )
};
import * as React from 'react';
import { QueryClientProvider } from 'react-query';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import client from './config/client';
import { AuthenticationProvider } from './hooks/useAuthentication';
import Navigation from './navigation';

const App: React.FC = () => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <QueryClientProvider client={client}>
          <SafeAreaProvider>
            <AuthenticationProvider>
              <Navigation />
              <StatusBar />
            </AuthenticationProvider>
          </SafeAreaProvider>
      </QueryClientProvider>
    );
  }
}

export default App;

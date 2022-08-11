import * as React from 'react';
import { QueryClientProvider } from 'react-query';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';
import themeRetroLink from './styles/theme';

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
        <ThemeProvider theme={themeRetroLink}>
          <SafeAreaProvider>
            <AuthenticationProvider>
              <Navigation />
              <StatusBar />
            </AuthenticationProvider>
          </SafeAreaProvider>
        </ThemeProvider>
      </QueryClientProvider>
    );
  }
}

export default App;

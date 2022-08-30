import * as React from 'react';
import { View, Text } from 'react-native';

import { Screen } from 'layout/Screen';

import { RootTabScreenProps } from '../../types';

export const HomeScreen = ({ navigation }: RootTabScreenProps<'TabOne'>) => {

  return (
    <Screen.Root>
      <Screen.Header title="Home" textColor="black" />
      <Screen.Content>
        <Text>Home Screen</Text>
      </Screen.Content>
    </Screen.Root>
  );
}

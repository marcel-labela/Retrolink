import * as React from 'react';
import { View, Text } from 'react-native';

import { RootTabScreenProps } from '../../types';

//@TODO: Fix hier de type nog even.
export const HomeScreen = ({ navigation }: RootTabScreenProps<'TabOne'>) => {

  return (
    <View>
      <Text>je bent ingelogged</Text>
    </View>
  );
}

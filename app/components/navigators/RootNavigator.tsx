import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NotFoundScreen } from 'screens';

import { RootStackParamList} from 'types';
const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </RootStack.Navigator>
  );
}

export default RootNavigator;
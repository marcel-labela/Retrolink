import * as i from 'types';
import * as React from 'react';

import { Screen } from 'layout/Screen';
import { Text } from 'components/common/typography';
import { LoginForm } from 'modules/LoginForm';

export const LoginScreen = ({ navigation }: i.RootTabScreenProps<'LoginScreen'>) => {
  return (
    <Screen.Root variant="secondary">
      <Screen.Header
        textColor="white"
        align='left'
        title='Login'
        subtitle="welcome back to Retrolink"
      />
        <Screen.Content>
          <LoginForm />
        </Screen.Content>
        <Screen.Footer>
          <Text
            margin="12px 0 0"
            onPress={() => navigation.navigate('RegisterScreen')}
            size={18}
            color="white"
            align="center"
          >
            Want to create a new account?
          </Text>
        </Screen.Footer>
    </Screen.Root>
  );
}

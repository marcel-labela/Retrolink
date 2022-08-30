import * as i from 'types';
import * as React from 'react';

import { Screen } from 'layout/Screen';
import { RegisterForm } from 'modules/RegisterForm';

import { Text } from 'components/common/typography';

export const RegisterScreen = ({ navigation }: i.RootTabScreenProps<'RegisterScreen'>) => {
  return (
    <Screen.Root variant="secondary">
    <Screen.Header align='left' title='Register' subtitle="Welcome to Retrolink" />
      <Screen.Content>
        <RegisterForm />
      </Screen.Content>
      <Screen.Footer>
      <Text
        margin="12px 0 0"
        onPress={() => navigation.navigate('LoginScreen')}
        size={18}
        color="white"
        align="center"
      >
        Already have an account?
      </Text>
      </Screen.Footer>
  </Screen.Root>
  )
}

type RegisterForm = {
  email: string;
  password: string;
  username: string;
  password2: string;
};
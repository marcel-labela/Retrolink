import * as React from 'react';
import { Alert, Text } from 'react-native';
import { useQueryClient } from 'react-query';

import { RootTabScreenProps } from '../../types';
import { useQueryMe, useMutateDeleteMe } from 'queries/users';
import { useAuthenticationActions } from 'hooks/useAuthentication';
import { Screen } from 'layout/Screen';

export const ProfileScreen = ({ navigation }: RootTabScreenProps<'TabOne'>) => {
  const queryClient = useQueryClient();
  const { logout } = useAuthenticationActions();
  const { data: me } = useQueryMe();
  const { mutate: deleteAccountMe, isLoading } = useMutateDeleteMe();
  if (!me) return null;

  const onPressDeleteAccountAction = () => {
    Alert.alert('Delete account', 'Are you sure you want to delete your account>', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete account',
        onPress: () => {
          if (isLoading) return;

          deleteAccountMe(me, {
            onSuccess: () => {
              queryClient.clear();
              logout();
              navigation.navigate('LoginScreen');
            },
            onError: (err) => {
              console.log('err', err);
            }
          });
        },
        style: 'destructive'
      },
    ]);
  }

  return (
    <Screen.Root>
      <Screen.Header title="Profile" variant="black" />
      <Screen.Content>
        <Text>Hello, {me.username}</Text>
      </Screen.Content>
    </Screen.Root>
  );
}

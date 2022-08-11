import * as React from 'react';
import { Alert } from 'react-native';
import { useQueryClient } from 'react-query';

import { Container } from 'layout/Container';
import { Heading, Text } from 'components/common/typography';
import { Button } from 'components/interaction';
import { RootTabScreenProps } from '../../types';
import { useQueryMe, useMutateDeleteMe } from 'queries/users';
import { useAuthenticationActions } from 'hooks/useAuthentication';

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
    <Container placement="start">
      <Heading>Profile screen</Heading>
      <Text size={16}>Hello, {me.username}</Text>
      <Button label="delete account" onPress={onPressDeleteAccountAction} />
    </Container>
  );
}

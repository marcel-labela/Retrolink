import * as i from 'types';
import { useQuery, useMutation } from 'react-query';

import { fetcher } from 'services';
import { useAuthenticationUser } from '../../hooks/useAuthentication';

const AUTH_URL = 'http://localhost:8888';

const getMe = () => fetcher<i.User>({
  path: '/me',
  method: 'GET',
  endpoint: AUTH_URL,
});

export const useQueryMe = () => {
  //@TODO Schrijf hier een nette onError functie bij voor alle queries
  const { authenticated } = useAuthenticationUser();

  return useQuery<i.User>(
    ['users', 'me'],
    getMe,
    {
      enabled: authenticated,
      // Up the staleTime, so we don't keep refetching the call.
      staleTime: 1000 * 6 * 30, // 30 minutes
    },
  );
};

export const useMutateDeleteMe = () => {
  return useMutation(
    async (user: i.User) => {
      return await fetcher({
        path: '/me',
        method: 'POST',
        endpoint: AUTH_URL,
      })
    }
  )
};
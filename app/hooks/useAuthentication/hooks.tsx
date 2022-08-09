import * as React from 'react';

import { Auth } from './services';
import { AuthenticationContext, initialState } from './context';
import { setAuthenticationTokens, removeAuthenticationTokens } from './token';
import { AuthenticationState } from './types';

const useAuthenticationContext = () => {
  const context = React.useContext(AuthenticationContext);
  if (!context) {
    throw new Error('Components should be rendered inside the AuthenticationProvider component');
  }

  return context;
};

export const useAuthenticationActions = () => {
  const { dispatch } = useAuthenticationContext();

  const register = async (email: string, password: string, username: string) => (
    new Promise<AuthenticationState>((resolve, reject) => {
      dispatch({ loading: true });

      const postBody = {
        email: email.toLowerCase(),
        password: password,
        username: username,
      }

      Auth.post({
        path: '/auth/register',
        body: postBody
      })
      .then(async (tokens) => {
        const response = dispatch({
          authenticated: true,
          loading: false,
          error: false,
        });

        await setAuthenticationTokens(tokens);
        resolve(response);
      })
      .catch((error) => {
        dispatch({
          authenticated: false,
          loading: false,
          error: true,
        });

        reject(error);
      })
    })
  );

  const login = async (email: string, password: string) => (
    new Promise<AuthenticationState>((resolve, reject) => {
      dispatch({ loading: true });

      Auth.post({
        path: '/auth/login',
        body: {
          email: email.toLowerCase(),
          password,
        },
      })
        .then(async (tokens) => {
          const response = dispatch({
            authenticated: true,
            loading: false,
            error: false,
          });

          await setAuthenticationTokens(tokens);
          resolve(response);
        })
        .catch((error) => {
          dispatch({
            loading: false,
            error: true,
          });

          reject(error);
        });
    })
  );

  const logout = () => (
    new Promise<AuthenticationState>(async (resolve, reject) => {
      dispatch({ loading: true });

      await removeAuthenticationTokens();
      const response = dispatch({
        ...initialState,
        loading: false,
        authenticated: false,
      });

      resolve(response);
    })
  );

  return {
    login,
    logout,
    register,
  };
};

export const useAuthenticationUser = () => {
  const { state } = useAuthenticationContext();
  const { authenticated, loading, error } = state;
  const determined = typeof authenticated !== 'undefined';

  return {
    determined,
    authenticated: determined
      ? authenticated
      : false,
    loading,
    error,
  };
};
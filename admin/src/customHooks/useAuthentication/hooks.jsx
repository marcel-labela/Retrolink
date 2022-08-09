import * as React from 'react';

import { Auth } from './services';
import { AuthenticationContext, initialState } from './context';
import { setAuthenticationTokens, removeAuthenticationTokens } from './token';

// Because this an admin dashboard. Admins can only login and logout.
// Contact developer for an admin account.

const useAuthenticationContext = () => {
  const context = React.useContext(AuthenticationContext);

  if (!context) {
    throw new Error('useAuthenticationContext must be used within a AuthenticationProvider');
  }

  return context;
};

export const useAuthenticationActions = () => {
  const { dispatch } = useAuthenticationContext();

  const login = async (email, password) => (
    new Promise((resolve, reject) => {
      dispatch({ loading: true });

      Auth.post({
        path: '/auth/login',
        body: {
          email: email.toLowerCase(),
          password,
        },
      })
      .then(async(tokens) => {
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
      })
    })
    );

    const logout = () => (
      new Promise(async (resolve, reject) => {
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
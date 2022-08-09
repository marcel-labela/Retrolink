import * as React from 'react';
import { getAuthenticationToken } from './token';

export const AuthenticationContext = React.createContext(null);

export const initialState = {
  isAuthenticated: undefined,
  loading: false,
  error: false,
};

export const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = React.useState(initialState);

  const dispatch = (userData) => {
    const state = {
      ...user,
      userData,
    };

    setUser(state);
    return state;
  };

  React.useEffect(() => {
    const determineUser = async () => {
      dispatch({ loading: true });

      getAuthenticationToken()
        .then(() => {
          dispatch({
            authenticated: true,
            loading: false,
          });
        })
        .catch(() => {
          dispatch({
            authenticated: false,
            loading: false,
          });
        });
    };

    determineUser();
  }, []);

  return (
    <AuthenticationContext.Provider value={{ state: user, dispatch}}>
      {children}
    </AuthenticationContext.Provider>
  )
}
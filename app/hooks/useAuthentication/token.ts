import AsyncStorage from '@react-native-async-storage/async-storage';

// config files uit de dontenv halen.
import { Auth, getAuthenticationConfig, getCurrentTimestamp } from './services';
import { AuthenticationTokenType, AuthenticationTokensPayload } from './types';

// Save access token in memory.
// This needs to be done outside of react, because we have to access the token in our middleware.
let token: AuthenticationTokenType = undefined;

export const getRefreshToken = (): Promise<string | null> =>  {
  return AsyncStorage.getItem(getAuthenticationConfig.TOKEN_STORAGE_KEY);
};

const setAccessToken = (newToken: string) => {
  token = {
    token: newToken,
    expires_at: getCurrentTimestamp() + getAuthenticationConfig.REFRESH_TOKEN_INTERVAL,
  };
};

export const setAuthenticationTokens = async ({
  refresh, access,
}: AuthenticationTokensPayload) => {
  await AsyncStorage.setItem(getAuthenticationConfig.TOKEN_STORAGE_KEY, refresh);
  if (access) setAccessToken(access);
};

export const removeAuthenticationTokens = async () => {
  await AsyncStorage.removeItem(getAuthenticationConfig.TOKEN_STORAGE_KEY);
  token = undefined;
};

export const getAuthenticationToken = () => new Promise<string>(
  async (resolve, reject) => {
    const refresh = await getRefreshToken();

    if (refresh) {
      const current = getCurrentTimestamp();

      // Check if refresh needs refreshing by comparing timestamps
      if (!token || current >= token.expires_at) {
        await Auth.post({
          path: '/auth/refreshToken',
          body: {
            refresh,
          },
        })
          .then((newToken) => {
            setAccessToken(newToken.access);
          })
          .catch(async () => {
            await removeAuthenticationTokens();
          });
      }
    }

    return token
      ? resolve(token.token)
      : reject();
  },
);
import qs from 'qs';

// todo: haal auth url uit de dotenv.
// const AUTH_URL = 'auth url';
const AUTH_URL = 'http://localhost:8888';

import { AuthRequest, AuthRequestOptions, FetchOptions, ApiError } from './types';

export const getCurrentTimestamp = () => Math.floor(Date.now() / 1000);
export const getAuthenticationConfig = {
  TOKEN_STORAGE_KEY: 'auth_refresh_token',
  REFRESH_TOKEN_INTERVAL: 300, /* 5 minutes = 300 seconds */
};

const formatAuthApiOptions = (options: FetchOptions, method: string): AuthRequestOptions => {
  const { path, query, body } = options;

  return {
    path: `${AUTH_URL}${path}${query ? `?${qs.stringify(query, { encode: false })}` : ''}`,
    options: {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      ...(body && {
        body: JSON.stringify(body),
      }),
    },
  };
};

export const authRequest: AuthRequest = ({
  path, options,
}) => new Promise(async (resolve, reject) => {
  fetch(path, options)
    .then(async (response) => {
      if (response.ok) {
        return response.status !== 204
          ? response.json()
          : response.text();
      }

      return Promise.reject(response.json());
    })
    .then((json) => { resolve(json); })
    .catch((json) => {
      try {
        json.then((err: ApiError) => {
          reject(err);
        }).catch((err: ApiError) => {
          reject(err);
        });
      } catch (err) {
        reject(json);
      }
    });
});

export const Auth = {
  get: (options: FetchOptions) => authRequest(formatAuthApiOptions(options, 'GET')),
  del: (options: FetchOptions) => authRequest(formatAuthApiOptions(options, 'DELETE')),
  post: (options: FetchOptions) => authRequest(formatAuthApiOptions(options, 'POST')),
  put: (options: FetchOptions) => authRequest(formatAuthApiOptions(options, 'PUT')),
  patch: (options: FetchOptions) => authRequest(formatAuthApiOptions(options, 'PATCH')),
};
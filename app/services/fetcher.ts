import qs from 'qs';

// import { API_URL } from 'config';
import { getAuthenticationToken } from '../hooks/useAuthentication';

const API_URL = 'http://localhost:8888';

export const fetcher: FetcherType = async ({
  path,
  method,
  options,
  query,
  body,
  json,
  withAuth = true,
  endpoint = API_URL,
}) => {
  let formatAsJson = true;
  if (json === false) formatAsJson = false;

  let fetchOptions: RequestInit = {
    ...options,
    method,
    headers: { 'Content-Type': 'application/json' },
  };

  if (body) {
    fetchOptions = {
      ...fetchOptions,
      body: JSON.stringify(body),
    };
  }

  if (withAuth) {
    const authToken = await getAuthenticationToken();

    fetchOptions.headers = {
      ...fetchOptions.headers,
      'Authorization': `Bearer ${authToken}`,
    };
  }

  return new Promise((resolve, reject) => {
    fetch(
      `${endpoint}${path}${query ? `?${qs.stringify(query)}` : ''}`,
      fetchOptions,
    )
      .then(async (response) => {
        if (response.ok) {
          // @ts-ignore
          if (response.status === 204) resolve();
          if (formatAsJson) return response.json();
          return response.text();
        }

        return Promise.reject({
          status: response.status,
          error: response.json(),
        });
      })
      .then((json) => { resolve(json); })
      .catch((json) => { reject(json); });
  });
};

type FetcherType = <T>(options: {
  path: string;
  method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DEL';
  options?: RequestInit;
  query?: any;
  body?: any;
  json?: boolean;
  withAuth?: boolean;
  endpoint?: string;
}) => Promise<T>;
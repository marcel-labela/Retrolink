export type FetchOptions = {
  path: string;
  query?: any;
  body?: any;
};

export type ApiError = any;

export type AuthRequestOptions = {
  path: string;
  options: {
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DEL';
    body?: any;
    headers?: any;
  }
};

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export type AuthRequest = <T = any>(options: AuthRequestOptions) => Promise<T>;

export type EnvironmentTypes = 'production' | 'acceptation' | 'test' | 'development';

export type AuthenticationState = {
  authenticated?: boolean;
  loading: boolean;
  error: boolean;
};

export type AuthenticationContextType = {
  state: AuthenticationState;
  dispatch: (userData: Partial<AuthenticationState>) => AuthenticationState;
};

export type AuthenticationTokenType = {
  token: string;
  expires_at: number;
} | undefined;

export type AuthenticationTokensPayload = {
  refresh: string;
  access?: string;
};
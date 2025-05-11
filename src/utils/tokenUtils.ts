interface JWTObj {
  exp: number;
  jti: string;
  token_type: 'refresh' | 'access';
  user_id: string | number;
}

export function parseJWT(token: string): JWTObj | null {
  try {
    const str: string = atob(token.split('.')[1]);
    return JSON.parse(str) as JWTObj;
  } catch (e) {
    return null;
  }
}

export function isAccessTokenExpired() {
  const payload = parseJWT(localStorage.getItem('ACCESS_TOKEN') || '');
  if (payload && payload.exp) {
    const delta = 1000 * payload.exp - new Date().getTime();
    return delta < 5000;
  }
  return true;
}

export function isRefreshTokenExpired() {
  const payload = parseJWT(localStorage.getItem('REFRESH_TOKEN') || '');
  if (payload && payload.exp) {
    const delta = 1000 * payload.exp - new Date().getTime();
    return delta < 5000;
  }
  return true;
}

export function isAuthenticated() {
  return !isRefreshTokenExpired();
}

export function setAuthority(payload: { access?: string; refresh?: string }) {
  if (payload.access) {
    localStorage.setItem('ACCESS_TOKEN', payload.access);
  }
  if (payload.refresh) {
    localStorage.setItem('REFRESH_TOKEN', payload.refresh);
  }
}

export function clearAuthority() {
  localStorage.setItem('ACCESS_TOKEN', '');
  localStorage.setItem('REFRESH_TOKEN', '');
}

import { request } from '@umijs/max';

/**
 * @description: 刷新token
 * @param {Object} params
 */
export function accountsRefresh(params: any) {
  return request('/users/api/token/refresh/', {
    method: 'POST',
    data: params,
  });
}

export function accountsLogin(params: { user_name: string; password: string }) {
  return request('/users/api/token/', {
    method: 'POST',
    data: params,
    skipAddToken: true,
  });
}

export function getUserInfo() {
  return request('/users/api/me/');
}

// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 登出接口 POST /users/api/logout/ */
export async function postUsersApiLogout(
  body: {
    refresh_token?: string;
  },
  options?: { [key: string]: any },
) {
  const formData = new FormData();

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      if (typeof item === 'object' && !(item instanceof File)) {
        if (item instanceof Array) {
          item.forEach((f) => formData.append(ele, f || ''));
        } else {
          formData.append(ele, JSON.stringify(item));
        }
      } else {
        formData.append(ele, item);
      }
    }
  });

  return request<Record<string, any>>('/users/api/logout/', {
    method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 获取当前用户信息 GET /users/api/me/ */
export async function getUsersApiMe(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/users/api/me/', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 登录接口 POST /users/api/token/ */
export async function postUsersApiToken(
  body: {
    user_name?: string;
    password?: string;
  },
  options?: { [key: string]: any },
) {
  const formData = new FormData();

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      if (typeof item === 'object' && !(item instanceof File)) {
        if (item instanceof Array) {
          item.forEach((f) => formData.append(ele, f || ''));
        } else {
          formData.append(ele, JSON.stringify(item));
        }
      } else {
        formData.append(ele, item);
      }
    }
  });

  return request<Record<string, any>>('/users/api/token/', {
    method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 刷新token POST /users/api/token/refresh/ */
export async function postUsersApiTokenRefresh(
  body: {
    refresh?: string;
  },
  options?: { [key: string]: any },
) {
  const formData = new FormData();

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      if (typeof item === 'object' && !(item instanceof File)) {
        if (item instanceof Array) {
          item.forEach((f) => formData.append(ele, f || ''));
        } else {
          formData.append(ele, JSON.stringify(item));
        }
      } else {
        formData.append(ele, item);
      }
    }
  });

  return request<Record<string, any>>('/users/api/token/refresh/', {
    method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

import { RuntimeConfig, history } from '@umijs/max';
import { message } from 'antd';
import { cloneDeep, get } from 'lodash';
import queryString from 'query-string';

import type { RequestOptions } from '@@/plugin-request/request';

import { accountsRefresh } from '../services/user';
import {
  clearAuthority,
  isAccessTokenExpired,
  isAuthenticated,
  setAuthority,
} from '../utils/tokenUtils';

let refreshJWTFlag = false; // 是否在请求新的token
const subscribers: (() => void)[] = []; // 重试队列，每一项将是一个待执行的函数形式

// 添加被缓存等待的接口
const addSubscriber = (listener: () => void) => subscribers.push(listener);

// 执行被缓存等待的接口
const notifySubscriber = () => {
  subscribers.forEach((callback) => callback());
  subscribers.length = 0;
};

// 刷新 token 请求
const refreshTokenRequest = async (refreshToken: string) => {
  try {
    const { data, status } = await accountsRefresh({
      refresh: refreshToken,
    }); // 发起请求刷新token，并将请求的Promise保存
    // 请求完成
    if (status !== 200) {
      history.replace('/login');
      return;
    }
    setAuthority(data); // 将新的token写入到localStorage
  } catch (e) {
    clearAuthority();
    history.replace('/login');
    console.error('Request to refresh token failed');
  } finally {
    notifySubscriber();
  }
  refreshJWTFlag = false;
};

/**
 * @description 当token到期时运行，
 * @param {String} url 拦截正在刷新token时的后续请求
 * @param {Object} options 被拦截请求的设置
 * @param {String} refreshToken 需要刷新的token
 * @returns {Promise} 返回更新数据的Promise
 */
async function refreshJWT(
  options: RequestOptions,
  refreshToken: string,
): Promise<any> {
  if (!refreshJWTFlag) {
    // 检测是否正在刷新token
    refreshJWTFlag = true; // 若没有在刷新则到这里来打开标记
    return refreshTokenRequest(refreshToken);
  }

  // 正在刷新 token，返回一个未执行 resolve 的 promise
  return new Promise((resolve) => {
    // 将resolve放进队列，用一个函数形式来保存，等token刷新后直接执行
    addSubscriber(() => {
      resolve(options);
    });
  });
}

const addToken = async (config: RequestOptions): Promise<RequestOptions> => {
  if (config.skipAddToken) return config;

  const cloneConfig: RequestOptions = cloneDeep(config);
  let token: string | undefined;

  if (!token) {
    if (
      isAccessTokenExpired() &&
      isAuthenticated() &&
      cloneConfig.url !== '/users/token/refresh/'
    ) {
      const refreshToken = localStorage.getItem('REFRESH_TOKEN') || '';
      await refreshJWT(cloneConfig, refreshToken);
    }
    token = localStorage.getItem('ACCESS_TOKEN') || '';
  }

  if (token) {
    if (cloneConfig.headers) {
      cloneConfig.headers.Authorization = `Bearer ${token}`;
    } else {
      cloneConfig.headers = {
        Authorization: `Bearer ${token}`,
      };
    }
  }
  return cloneConfig;
};

const errResponseInterceptors = (res: any) => {
  const { response } = res;
  if (response?.status === 401 && location.pathname !== '/login') {
    history.replace('/login');
    return Promise.reject(res);
  }
  const resMessage = get(response, 'data.data.message', 'some error');
  message.error({ content: resMessage });
  return Promise.reject(res);
};

const request: RuntimeConfig['request'] = {
  timeout: 1000 * 60,
  paramsSerializer(params: any) {
    return queryString.stringify(params);
  },
  baseURL: '/api',
  // 为 request 方法添加请求阶段的拦截器。
  requestInterceptors: [addToken],
  // 为 request 方法添加响应阶段的拦截器。
  responseInterceptors: [
    [
      (res) => {
        const resMessage = get(res, 'data.message', null);
        const success = get(res, 'data.success', false);
        if (!success && resMessage) {
          message.error({ content: resMessage });
        }
        return res;
      },
      errResponseInterceptors,
    ],
  ],
};

export default request;

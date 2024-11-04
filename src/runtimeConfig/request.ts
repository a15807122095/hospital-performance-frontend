import { RuntimeConfig } from '@umijs/max';
import queryString from 'query-string';

const request: RuntimeConfig['request'] = {
  timeout: 1000 * 60,
  paramsSerializer(params: any) {
    return queryString.stringify(params);
  },
  baseURL: '/api',
  // 为 request 方法添加请求阶段的拦截器。
  requestInterceptors: [],
  // 为 request 方法添加响应阶段的拦截器。
  responseInterceptors: [],
};

export default request;

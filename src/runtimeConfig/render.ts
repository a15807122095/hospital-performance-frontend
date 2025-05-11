import { RuntimeConfig } from '@umijs/max';
import { isAuthenticated } from '../utils/tokenUtils';

const render: RuntimeConfig['render'] = function (oldRender) {
  if (!isAuthenticated() && window.location.pathname !== '/login') {
    location.href = '/login';
    return;
  }
  oldRender();
};

export default render;

import { RuntimeConfig } from '@umijs/max';

const render: RuntimeConfig['render'] = function (oldRender) {
  oldRender();
};

export default render;

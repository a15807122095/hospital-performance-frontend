// 运行时配置
export * from './runtimeConfig/request';
import _getInitialState from './runtimeConfig/getInitialState';
import _layout from './runtimeConfig/layout';
import _render from './runtimeConfig/render';

export const getInitialState = _getInitialState;
export const layout = _layout;
export const render = _render;

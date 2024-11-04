import { defineConfig } from '@umijs/max';
import routes from './routes';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: { dataField: '' },
  layout: {
    title: '@umijs/max',
  },
  locale: {
    default: 'zh-CN',
    antd: true,
  },
  clientLoader: {},
  esbuildMinifyIIFE: true,
  mock: false,
  hash: true,
  codeSplitting: {
    jsStrategy: 'granularChunks',
  },
  // 详情查看https://umijs.org/docs/api/config#icons
  // icon查询https://icones.js.org/
  icons: {
    autoInstall: {},
  },
  routes,
  npmClient: 'pnpm',
  tailwindcss: {},
});

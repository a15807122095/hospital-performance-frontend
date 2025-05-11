import { defineConfig } from '@umijs/max';
import routes from './routes';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    locale: false,
    title: '',
  },
  locale: false,
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
  npmClient: 'yarn',
  tailwindcss: {},
  plugins: ['@umijs/max-plugin-openapi'],
  openAPI: [
    {
      requestLibPath: "import { request } from '@umijs/max'",
      schemaPath: 'http://127.0.0.1:4523/export/openapi/19?version=3.0',
      projectName: 'openapi',
    },
  ],
});

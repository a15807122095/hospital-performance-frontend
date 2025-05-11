import { defineConfig } from '@umijs/max';

export default defineConfig({
  mock: {},
  // 点击组件跳转到对应的组件文件 Option+Click
  clickToComponent: {
    editor: 'vscode',
  },
  devtool: 'source-map',
  proxy: {
    '/api': {
      target: 'http://121.40.244.192:8081',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    },
  },
});

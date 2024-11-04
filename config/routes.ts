import { IConfigFromPlugins } from '@@/core/pluginConfig';

interface ILayoutRoute {
  path: string;
  component: string;
  name: string; // 兼容此写法
  icon: string;
  // 更多功能查看
  // https://beta-pro.ant.design/docs/advanced-menu
  // ---
  // 新页面打开
  target: string;
  // 不展示顶栏
  headerRender: boolean;
  // 不展示页脚
  footerRender: boolean;
  // 不展示菜单
  menuRender: boolean;
  // 不展示菜单顶栏
  menuHeaderRender: boolean;
  // 权限配置，需要与 plugin-access 插件配合使用
  access: string;
  // 隐藏子菜单
  hideChildrenInMenu: boolean;
  // 隐藏自己和子菜单
  hideInMenu: boolean;
  // 在面包屑中隐藏
  hideInBreadcrumb: boolean;
  // 子项往上提，仍旧展示;
  flatMenu: boolean;
}

export type IRouteType = IConfigFromPlugins['routes'] | Partial<ILayoutRoute>[];

const routes: IRouteType = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '首页',
    path: '/home',
    component: './Home',
  },
  {
    name: '权限演示',
    path: '/access',
    component: './Access',
  },
  {
    name: ' CRUD 示例',
    path: '/table',
    component: './Table',
  },
];

export default routes;

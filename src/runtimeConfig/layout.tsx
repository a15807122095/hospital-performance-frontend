import { RunTimeLayoutConfig, useModel } from '@umijs/max';

const Layout: RunTimeLayoutConfig = () => {
  const { loading } = useModel('@@initialState');

  return {
    title: false,
    layout: 'mix',
    menu: {
      loading,
      locale: false,
    },
    logo: false,
    loading,
    logout: () => {},
    waterMarkProps: {
      content: 'test',
      gapX: 200,
      gapY: 120,
    },
  };
};

export default Layout;

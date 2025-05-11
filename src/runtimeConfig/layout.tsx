import { RunTimeLayoutConfig, useModel } from '@umijs/max';
import { get } from 'lodash';

const Layout: RunTimeLayoutConfig = () => {
  const { loading, initialState } = useModel('@@initialState');
  const waterMark =
    get(initialState, 'userInfo.user_name', '') +
    (get(initialState, 'userInfo.phone', '')?.slice(-4) || '');
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
      content: waterMark,
      gapX: 200,
      gapY: 120,
    },
  };
};

export default Layout;

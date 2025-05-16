import { postUsersApiLogout } from '@/services/openapi/dengluxiangguan';
import { clearAuthority } from '@/utils/tokenUtils';
import { history, RunTimeLayoutConfig, useModel } from '@umijs/max';
import { get } from 'lodash';

const Layout: RunTimeLayoutConfig = () => {
  const { loading, initialState, setInitialState } = useModel('@@initialState');
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
    logout: () => {
      postUsersApiLogout({
        refresh_token: localStorage.getItem('REFRESH_TOKEN') || '',
      });
      clearAuthority();
      setInitialState({
        ...initialState,
        userInfo: null,
      });
      history.replace('/login');
    },
    waterMarkProps: {
      content: waterMark,
      gapX: 200,
      gapY: 120,
    },
  };
};

export default Layout;

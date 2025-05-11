import { isAuthenticated } from '@/utils/tokenUtils';
import { PageContainer } from '@ant-design/pro-components';
import { Outlet, useModel } from '@umijs/max';
import { get } from 'lodash';
import styles from './styles.less';

const BasicLayout: React.FC = () => {
  const { initialState, refresh } = useModel('@@initialState');
  if (!get(initialState, 'userInfo') && isAuthenticated()) {
    refresh();
  }
  return (
    <PageContainer
      ghost
      title={false}
      header={{
        breadcrumb: {},
      }}
    >
      <div className={styles['content-layout']}>
        <Outlet />
      </div>
    </PageContainer>
  );
};

export default BasicLayout;

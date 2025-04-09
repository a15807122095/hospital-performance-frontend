import { PageContainer } from '@ant-design/pro-components';
import { Outlet } from '@umijs/max';
import styles from './styles.less';

const BasicLayout: React.FC = () => {
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

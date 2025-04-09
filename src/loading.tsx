import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const Loading = () => {
  return (
    <Spin
      spinning
      indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />}
      fullscreen
    />
  );
};

export default Loading;

import { getBaseConfigPositionSystem } from '@/services/openapi/zhixibiao';
import { ProSchemaValueEnumMap } from '@ant-design/pro-components';
import { SelectProps } from 'antd';
import { get } from 'lodash';

export default async function positionLoader() {
  const res = await getBaseConfigPositionSystem({
    page: 1,
    page_size: 500,
  });
  const valueEnum: ProSchemaValueEnumMap = new Map();
  const options: SelectProps['options'] = [];
  const data = get(res, 'data.result', []);
  data.forEach((item) => {
    valueEnum.set(item.id, {
      text: item.position_designation,
    });
    options.push({
      value: String(item.id),
      label: item.position_designation,
    });
  });

  return {
    valueEnum,
    options,
  };
}

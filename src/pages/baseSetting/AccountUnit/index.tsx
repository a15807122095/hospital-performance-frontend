import {
  deleteAccountDictionary,
  getAccountDictionaryList,
  putAccountDictionary,
} from '@/services/baseConfig';
import { ProTable, ProTableProps } from '@ant-design/pro-components';
import { Button, message } from 'antd';
import { get, omit } from 'lodash';

type TableProps = ProTableProps<any, any>;

const AccountUnit = () => {
  const tabRequest: TableProps['request'] = async (params) => {
    const { data, ...other } = await getAccountDictionaryList({
      page: get(params, 'current'),
      page_size: get(params, 'pageSize', 10),
    });
    return {
      data: get(data, 'result', []),
      total: get(data, 'total'),
      ...other,
    };
  };

  const columns: TableProps['columns'] = [
    {
      title: '科室代码',
      dataIndex: 'department_code',
    },
    {
      title: '科室名称',
      dataIndex: 'department_name',
    },
    {
      title: '拼音',
      dataIndex: 'pingying_code',
    },
    {
      title: '院区',
      dataIndex: 'campus',
      valueType: 'select',
    },
    {
      title: '类别',
      dataIndex: 'category_designation',
      valueType: 'select',
    },
    {
      title: '上级科室',
      dataIndex: 'superior_department',
      search: false,
    },
    {
      title: '更新时间',
      dataIndex: 'modified_time',
      editable: false,
      valueType: 'dateRange',
      search: {
        transform: (value) => {
          return {
            startTime: value[0],
            endTime: value[1],
          };
        },
      },
    },
    {
      title: '操作',
      dataIndex: 'operate',
      valueType: 'option',
      align: 'center',
      width: 130,
      render: (text, record, _, action) => [
        <Button variant="text" color="primary" key="view">
          查看
        </Button>,
        <Button
          variant="text"
          color="cyan"
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id);
          }}
        >
          编辑
        </Button>,
        <Button variant="text" color="danger" key="delete">
          删除
        </Button>,
      ],
    },
  ];

  const editable: TableProps['editable'] = {
    actionRender: (row, config, dom) => {
      return [
        <Button variant="text" color="primary" key="save">
          {dom.save}
        </Button>,
        <Button variant="text" color="danger" key="delete">
          {dom.delete}
        </Button>,
        <Button variant="text" color="default" key="cancel">
          {dom.cancel}
        </Button>,
      ];
    },
    onSave: async (rowKey, data) => {
      await putAccountDictionary(rowKey as React.Key, omit(data, 'index'));
      message.success({ content: '更新成功!' });
    },
    onDelete: async (rowKey) => {
      await deleteAccountDictionary(rowKey as React.Key);
      message.success({ content: '删除成功!' });
    },
  };

  return (
    <div>
      <ProTable
        request={tabRequest}
        options={{
          setting: false,
        }}
        columns={columns}
        rowKey="id"
        editable={editable}
      />
    </div>
  );
};

export default AccountUnit;

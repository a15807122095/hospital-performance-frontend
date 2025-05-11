import {
  deleteAccountDictionary,
  getAccountDictionaryList,
  postAccountDictionary,
  putAccountDictionary,
} from '@/services/baseConfig';
import { PlusOutlined } from '@ant-design/icons';
import {
  ActionType,
  ProTable,
  ProTableProps,
} from '@ant-design/pro-components';
import { Button, message, Space } from 'antd';
import { get, omit } from 'lodash';
import { useRef } from 'react';

type TableProps = ProTableProps<any, any>;

const AccountUnit = () => {
  const actionRef = useRef<ActionType>(null);

  const tabRequest: TableProps['request'] = async (params) => {
    const { data, ...other } = await getAccountDictionaryList({
      page: get(params, 'current'),
      page_size: get(params, 'pageSize', 10),
      ...omit(params, ['current', 'pageSize']),
    });
    return {
      data: get(data, 'result', []),
      total: get(data, 'total'),
      ...other,
    };
  };

  const columns: TableProps['columns'] = [
    {
      title: '关键字',
      dataIndex: 'keyword',
      hideInTable: true,
    },
    {
      title: '科室代码',
      dataIndex: 'department_code',
      hideInSearch: true,
    },
    {
      title: '科室名称',
      dataIndex: 'department_name',
      hideInSearch: true,
    },
    {
      title: '拼音',
      dataIndex: 'pingying_code',
      hideInSearch: true,
    },
    {
      title: '院区',
      dataIndex: 'campus',
      hideInSearch: true,
    },
    {
      title: '类别',
      dataIndex: 'category_designation',
      valueType: 'select',
      valueEnum: {
        doctor: {
          text: '医师',
        },
        technician: {
          text: '技师',
        },
        nurse: {
          text: '护士',
        },
        admin: {
          text: '行政',
        },
      },
    },
    {
      title: '上级科室',
      dataIndex: 'superior_department',
      search: false,
      hideInSearch: true,
    },
    {
      title: '更新时间',
      key: 'show modified_time',
      dataIndex: 'modified_time',
      editable: false,
      hideInSearch: true,
    },
    {
      title: '更新时间',
      dataIndex: 'modified_time',
      editable: false,
      hideInTable: true,
      valueType: 'dateTimeRange',
      search: {
        transform: (value) => {
          return {
            modified_time_after: value[0],
            modified_time_before: value[1],
          };
        },
      },
    },
    {
      title: '操作',
      dataIndex: 'operate',
      valueType: 'option',
      align: 'center',
      render: (text, record, _, action) => (
        <Space>
          <Button
            variant="text"
            color="cyan"
            key="editable"
            onClick={() => {
              action?.startEditable?.(record.id);
            }}
          >
            编辑
          </Button>
        </Space>
      ),
    },
  ];

  const editable: TableProps['editable'] = {
    saveText: (
      <Button variant="text" color="primary" key="save">
        保存
      </Button>
    ),
    cancelText: (
      <Button variant="text" color="default" key="cancel">
        取消
      </Button>
    ),
    deleteText: (
      <Button variant="text" color="danger" key="delete">
        删除
      </Button>
    ),
    onSave: async (rowKey, data, originRow, newLineConfig) => {
      if (newLineConfig) {
        const postData = omit(data, ['index', 'flag', 'id']);
        await postAccountDictionary(postData);
        message.success({ content: '添加成功!' });
        actionRef.current?.reload();
      } else {
        await putAccountDictionary(rowKey as React.Key, omit(data, 'index'));
        message.success({ content: '更新成功!' });
      }
    },
    onDelete: async (rowKey, row) => {
      const flag = get(row, 'flag');
      if (flag === 'create') {
        return;
      }
      await deleteAccountDictionary(rowKey as React.Key);
      message.success({ content: '删除成功!' });
    },
  };

  return (
    <div>
      <ProTable
        actionRef={actionRef}
        request={tabRequest}
        options={{
          setting: false,
        }}
        columns={columns}
        rowKey="id"
        editable={editable}
        toolbar={{
          actions: [
            <Button
              key="button"
              icon={<PlusOutlined />}
              onClick={() => {
                actionRef.current?.addEditRecord?.(
                  {
                    id: Date.now(),
                    flag: 'create',
                  },
                  {
                    position: 'top',
                  },
                );
              }}
              type="primary"
            >
              添加
            </Button>,
          ],
        }}
      />
    </div>
  );
};

export default AccountUnit;

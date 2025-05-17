import {
  deleteBaseConfigChargeCategoryId,
  getBaseConfigChargeCategory,
  postBaseConfigChargeCategory,
  putBaseConfigChargeCategoryId,
} from '@/services/openapi/shoufeileibiebiao';
import { PlusOutlined } from '@ant-design/icons';
import {
  ActionType,
  ProTable,
  ProTableProps,
} from '@ant-design/pro-components';
import { Button, message } from 'antd';
import { get, omit } from 'lodash';
import { useRef } from 'react';

type DateType = Awaited<
  ReturnType<typeof getBaseConfigChargeCategory>
>['data']['result'][number];

type TableProps = ProTableProps<
  DateType,
  API.getBaseConfigChargeCategoryParams
>;

const ChargeType = () => {
  const actionRef = useRef<ActionType>(null);
  const tabRequest: TableProps['request'] = async (params) => {
    const { data, ...other } = await getBaseConfigChargeCategory({
      page: get(params, 'current', 1),
      page_size: get(params, 'pageSize', 10),
      ...omit(params, ['current', 'pageSize']),
    });
    return {
      data: get(data, 'result', []),
      total: get(data, 'total', 0),
      ...other,
    };
  };

  const columns: TableProps['columns'] = [
    {
      title: '关键字',
      dataIndex: 'keyword',
      hideInTable: true,
      editable: false,
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
      title: '类别名称',
      dataIndex: 'charge_name',
      hideInSearch: true,
    },
    {
      title: '类别代码',
      dataIndex: 'charge_code',
      hideInSearch: true,
    },
    {
      title: '拼音码',
      dataIndex: 'pingying_code',
      hideInSearch: true,
    },
    {
      title: '自定义类型',
      dataIndex: 'customize',
      hideInSearch: true,
    },
    {
      title: '更新人',
      dataIndex: ['modified_by', 'user_name'],
      hideInSearch: true,
      editable: false,
    },
    {
      title: '更新时间',
      dataIndex: 'modified_time',
      hideInSearch: true,
      editable: false,
    },
    {
      title: '操作',
      dataIndex: 'operate',
      valueType: 'option',
      align: 'center',
      render: (text, record, _, action) => (
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
      ),
    },
  ];

  const editable: TableProps['editable'] = {
    saveText: (
      <Button variant="text" color="primary" key="save" size="small">
        保存
      </Button>
    ),
    cancelText: (
      <Button variant="text" color="default" key="cancel" size="small">
        取消
      </Button>
    ),
    deleteText: (
      <Button variant="text" color="danger" key="delete" size="small">
        删除
      </Button>
    ),
    onSave: async (rowKey, data, originRow, newLineConfig) => {
      const omitKeys = ['index', 'flag', 'id', 'modified_by', 'modified_time'];
      if (newLineConfig) {
        const postData = omit(data, omitKeys);
        await postBaseConfigChargeCategory(postData);
        message.success({ content: '添加成功!' });
        actionRef.current?.reload();
      } else {
        await putBaseConfigChargeCategoryId(
          { id: rowKey as string },
          omit(data, omitKeys),
        );
        message.success({ content: '更新成功!' });
      }
    },
    onDelete: async (rowKey, row) => {
      const flag = get(row, 'flag');
      if (flag === 'create') {
        return;
      }
      await deleteBaseConfigChargeCategoryId({ id: rowKey as string });
      message.success({ content: '删除成功!' });
    },
  };
  return (
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
  );
};

export default ChargeType;

import {
  deleteBaseConfigManuallyRecordId,
  getBaseConfigManuallyRecord,
  postBaseConfigManuallyRecord,
  putBaseConfigManuallyRecordId,
} from '@/services/openapi/luruxinxibiao';
import { PlusOutlined } from '@ant-design/icons';
import {
  ActionType,
  ProTable,
  ProTableProps,
} from '@ant-design/pro-components';
import { useSearchParams } from '@umijs/max';
import { Button, FormInstance, message } from 'antd';
import { get, omit } from 'lodash';
import { useEffect, useRef } from 'react';

type DateType = Awaited<
  ReturnType<typeof getBaseConfigManuallyRecord>
>['data']['result'][number];

type TableProps = ProTableProps<
  DateType,
  API.getBaseConfigManuallyRecordParams
>;

type PostData = Parameters<typeof postBaseConfigManuallyRecord>[0];

const ManualInput = () => {
  const actionRef = useRef<ActionType>(null);
  const formRef = useRef<FormInstance>();
  const [searchParams] = useSearchParams();
  const tabRequest: TableProps['request'] = async (params) => {
    const { data, ...other } = await getBaseConfigManuallyRecord({
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
      title: '参数范围',
      dataIndex: 'parameter_range',
      valueType: 'digitRange',
      editable: false,
      hideInTable: true,
      search: {
        transform: (value) => {
          return {
            parameter_min: value[0],
            parameter_max: value[1],
          };
        },
      },
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
      title: '参数名称',
      dataIndex: 'parameter_name',
      hideInSearch: true,
      formItemProps: {
        rules: [{ required: true }],
      },
    },
    {
      title: '拼音码',
      dataIndex: 'pingying_code',
      hideInSearch: true,
      formItemProps: {
        rules: [{ required: true }],
      },
    },
    {
      title: '参数',
      dataIndex: 'parameter',
      hideInSearch: true,
      valueType: 'digit',
      formItemProps: {
        rules: [{ required: true }],
      },
    },
    {
      title: '调整',
      dataIndex: 'adjuest',
      hideInSearch: true,
      valueType: 'digit',
      formItemProps: {
        rules: [{ required: true }],
      },
    },
    {
      title: '录入方式',
      dataIndex: 'record_method',
      hideInSearch: true,
      valueType: 'select',
      valueEnum: {
        manual: '人工',
        auto: '自动',
      },
      formItemProps: {
        rules: [{ required: true }],
      },
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
      const postData = omit(data, omitKeys) as PostData;
      if (newLineConfig) {
        await postBaseConfigManuallyRecord(postData);
        message.success({ content: '添加成功!' });
        actionRef.current?.reload();
      } else {
        await putBaseConfigManuallyRecordId({ id: rowKey as string }, postData);
        message.success({ content: '更新成功!' });
      }
    },
    onDelete: async (rowKey, row) => {
      const flag = get(row, 'flag');
      if (flag === 'create') {
        return;
      }
      await deleteBaseConfigManuallyRecordId({ id: rowKey as string });
      message.success({ content: '删除成功!' });
    },
  };

  useEffect(() => {
    formRef.current?.setFieldsValue({
      parameter_range: [
        searchParams.get('parameter_min'),
        searchParams.get('parameter_max'),
      ],
      modified_time: [
        searchParams.get('modified_time_after'),
        searchParams.get('modified_time_before'),
      ],
      keyword: searchParams.get('keyword'),
    });
  }, []);
  return (
    <ProTable
      actionRef={actionRef}
      formRef={formRef}
      request={tabRequest}
      options={{
        setting: false,
      }}
      form={{
        initialValues: {
          keyword: null,
          modified_time: [null, null],
          parameter_range: [null, null],
        },
        syncToUrl: (values, type) => {
          if (type === 'get') {
            return {
              ...values,
              parameter_range: [values.parameter_min, values.parameter_max],
              modified_time: [
                values.modified_time_after,
                values.modified_time_before,
              ],
            };
          }
          return values;
        },
        syncToUrlAsImportant: true,
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

export default ManualInput;

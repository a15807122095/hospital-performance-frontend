import {
  deleteBaseConfigAccountInformationId,
  getBaseConfigAccountInformation,
  postBaseConfigAccountInformation,
  putBaseConfigAccountInformationId,
} from '@/services/openapi/renyuanxinxibiao';
import { getBaseConfigPositionSystem } from '@/services/openapi/zhixibiao';
import { PlusOutlined } from '@ant-design/icons';
import {
  ActionType,
  ProSchemaValueEnumMap,
  ProTable,
  ProTableProps,
} from '@ant-design/pro-components';
import { useRequest } from '@umijs/max';
import { Button, message } from 'antd';
import { get, omit } from 'lodash';
import { useRef } from 'react';

type DateType = Awaited<
  ReturnType<typeof getBaseConfigAccountInformation>
>['data']['result'][number];

type TableProps = ProTableProps<
  DateType,
  API.getBaseConfigAccountInformationParams
>;

const AccountInformation = () => {
  const actionRef = useRef<ActionType>(null);
  const { data: positionSystemList } = useRequest(getBaseConfigPositionSystem, {
    defaultParams: [
      {
        page: 1,
        page_size: 500,
      },
    ],
  });

  const tabRequest: TableProps['request'] = async (params) => {
    const { data, ...other } = await getBaseConfigAccountInformation({
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
      title: '出勤天数',
      dataIndex: 'attendance_days',
      valueType: 'digitRange',
      editable: false,
      hideInTable: true,
      fieldProps: {
        allowClear: true,
      },
      search: {
        transform: (value) => {
          return {
            attendance_days_min: value[0],
            attendance_days_max: value[1],
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
      title: '员工编码',
      valueType: 'digit',
      dataIndex: 'staff_code',
      hideInSearch: true,
    },
    {
      title: '员工姓名',
      dataIndex: 'staff_name',
      hideInSearch: true,
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
      title: '组别号',
      dataIndex: 'group_code',
      hideInSearch: true,
    },
    {
      title: '组别名称',
      dataIndex: 'group_name',
      hideInSearch: true,
    },
    {
      title: '岗位',
      dataIndex: 'post',
      hideInSearch: true,
    },
    {
      title: '员工性质',
      dataIndex: 'staff_nature',
      hideInSearch: true,
    },
    {
      title: '出勤天数',
      dataIndex: 'attendance_days',
      valueType: 'digit',
      hideInSearch: true,
    },
    {
      title: '系数',
      dataIndex: 'coefficient',
      valueType: 'digit',
      hideInSearch: true,
    },
    {
      title: '奖金类别',
      dataIndex: 'bonus_category',
      hideInSearch: true,
    },
    {
      title: '职务',
      dataIndex: 'position',
      fieldProps: {
        popupMatchSelectWidth: false,
      },
      hideInSearch: true,
      valueEnum: () => {
        const result: ProSchemaValueEnumMap = new Map();
        const data = get(positionSystemList, 'result', []);
        data.forEach((item) => {
          result.set(item.id, {
            text: item.position_designation,
          });
        });
        return result;
      },
    },
    {
      title: '职称',
      dataIndex: 'job_title',
      hideInSearch: true,
    },
    {
      title: '工作证编报',
      dataIndex: 'work_number',
      hideInSearch: true,
    },
    {
      title: '原因',
      dataIndex: 'reason',
      hideInSearch: true,
    },
    {
      title: '更新人',
      dataIndex: ['modified_by', 'user_name'],
      editable: false,
      hideInSearch: true,
    },
    {
      title: '更新时间',
      dataIndex: 'modified_time',
      hideInSearch: true,
      editable: false,
    },
    {
      title: '操作',
      valueType: 'option',
      key: 'option',
      align: 'center',
      disable: true,
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
        await postBaseConfigAccountInformation(postData);
        message.success({ content: '添加成功!' });
        actionRef.current?.reload();
      } else {
        await putBaseConfigAccountInformationId(
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
      await deleteBaseConfigAccountInformationId({ id: rowKey as string });
      message.success({ content: '删除成功!' });
    },
  };
  return (
    <ProTable
      actionRef={actionRef}
      request={tabRequest}
      columnsState={{
        defaultValue: {
          option: { fixed: 'right', disable: true },
        },
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

export default AccountInformation;

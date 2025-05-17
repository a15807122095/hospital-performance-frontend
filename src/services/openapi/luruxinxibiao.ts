// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取录入信息列表 获取职系表列表 GET /base_config/manually_record/ */
export async function getBaseConfigManuallyRecord(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getBaseConfigManuallyRecordParams,
  options?: { [key: string]: any },
) {
  return request<{
    success: boolean;
    message: string;
    data: {
      total: number;
      page_size: number;
      page: number;
      result: {
        id: number;
        parameter_name: string;
        pingying_code: string;
        parameter: number;
        adjuest: number;
        record_method: string;
        modified_by: { id: number; user_name: string };
        modified_time: string;
      }[];
    };
  }>('/base_config/manually_record/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新增录入信息 新增人员信息 POST /base_config/manually_record/ */
export async function postBaseConfigManuallyRecord(
  body: {
    /** 参数名称 */
    parameter_name: string;
    /** 拼音码 */
    pingying_code: string;
    /** 参数值 */
    parameter: number;
    /** 调整值 */
    adjuest: number;
    /** 录入方式， 固定枚举： {'manual': 手动， 'auto': 自动} */
    record_method: string;
  },
  options?: { [key: string]: any },
) {
  const formData = new FormData();

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      if (typeof item === 'object' && !(item instanceof File)) {
        if (item instanceof Array) {
          item.forEach((f) => formData.append(ele, f || ''));
        } else {
          formData.append(ele, JSON.stringify(item));
        }
      } else {
        formData.append(ele, item);
      }
    }
  });

  return request<{
    total: number;
    page_size: number;
    page: number;
    result: {
      id: number;
      department_code: string;
      department_name: string;
      pingying_code: string;
      campus: string;
      category_designation: string;
      superior_department: string;
    }[];
  }>('/base_config/manually_record/', {
    method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 获取录入信息详情 获取人员信息某条详情（预留） GET /base_config/manually_record/${param0}/ */
export async function getBaseConfigManuallyRecordId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getBaseConfigManuallyRecordIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    message: string;
    data: {
      staff_code: number;
      staff_name: string;
      department_code: string;
      department_name: string;
      group_code: string;
      group_name: string;
      post: string;
      staff_nature: string;
      attendance_days: number;
      reason: string;
      coefficient: string;
      bonus_category: string;
      position: string;
      job_title: string;
      work_number: string;
      modified_by: { id: number; user_name: string };
      modified_time: string;
    };
  }>(`/base_config/manually_record/${param0}/`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 修改某条录入信息数据 PUT /base_config/manually_record/${param0}/ */
export async function putBaseConfigManuallyRecordId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putBaseConfigManuallyRecordIdParams,
  body: {
    /** 参数名称 */
    parameter_name: string;
    /** 拼音码 */
    pingying_code: string;
    /** 参数值 */
    parameter: number;
    /** 调整值 */
    adjuest: number;
    /** 录入方式， 固定枚举： {'manual': 手动， 'auto': 自动} */
    record_method: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  const formData = new FormData();

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      if (typeof item === 'object' && !(item instanceof File)) {
        if (item instanceof Array) {
          item.forEach((f) => formData.append(ele, f || ''));
        } else {
          formData.append(ele, JSON.stringify(item));
        }
      } else {
        formData.append(ele, item);
      }
    }
  });

  return request<Record<string, any>>(
    `/base_config/manually_record/${param0}/`,
    {
      method: 'PUT',
      params: { ...queryParams },
      data: formData,
      requestType: 'form',
      ...(options || {}),
    },
  );
}

/** 删除某条录入信息 DELETE /base_config/manually_record/${param0}/ */
export async function deleteBaseConfigManuallyRecordId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteBaseConfigManuallyRecordIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<Record<string, any>>(
    `/base_config/manually_record/${param0}/`,
    {
      method: 'DELETE',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}

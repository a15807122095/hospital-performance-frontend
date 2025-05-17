// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取核算单元字典表列表 获取核算单元字典表列表 GET /base_config/account_dictionary/ */
export async function getBaseConfigAccountDictionary(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getBaseConfigAccountDictionaryParams,
  options?: { [key: string]: any },
) {
  return request<{
    message: string;
    data: {
      total: number;
      page_size: number;
      page: number;
      result: {
        department_code: string;
        department_name: string;
        pingying_code: string;
        campus: string;
        position: string;
        modified_by: { id: number; user_name: string };
        modified_time: string;
        superior_department?: string;
        id: number;
      }[];
    };
    success: boolean;
  }>('/base_config/account_dictionary/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新增核算单元字典 新增核算单元字典表 POST /base_config/account_dictionary/ */
export async function postBaseConfigAccountDictionary(
  body: {
    /** 科室代码 */
    department_code: string;
    /** 科室名称 */
    department_name: string;
    /** 拼音码 */
    pingying_code: string;
    /** 外键关联职系表(传主键id) */
    position: string;
    /** 上级科室 */
    superior_department?: string;
    /** 院区标识 */
    campus: string;
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
  }>('/base_config/account_dictionary/', {
    method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 修改某条核算单元字典表数据 修改 PUT /base_config/account_dictionary/${param0}/ */
export async function putBaseConfigAccountDictionaryId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putBaseConfigAccountDictionaryIdParams,
  body: {
    /** 科室代码 */
    department_code: string;
    /** 科室名称 */
    department_name: string;
    /** 拼音码 */
    pingying_code: string;
    /** 外键关联职系表(传主键id) */
    position: string;
    /** 上级科室 */
    superior_department?: string;
    /** 院区标识 */
    campus: string;
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
    `/base_config/account_dictionary/${param0}/`,
    {
      method: 'PUT',
      params: { ...queryParams },
      data: formData,
      requestType: 'form',
      ...(options || {}),
    },
  );
}

/** 删除某条核算单元字典表 DELETE /base_config/account_dictionary/${param0}/ */
export async function deleteBaseConfigAccountDictionaryId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteBaseConfigAccountDictionaryIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<Record<string, any>>(
    `/base_config/account_dictionary/${param0}/`,
    {
      method: 'DELETE',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}

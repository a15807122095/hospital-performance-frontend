// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取职系表详情 获取职系表某条详情（预留） GET /base_config/account_dictionary/${param0}/ */
export async function getBaseConfigAccountDictionaryId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getBaseConfigAccountDictionaryIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<{
    message: string;
    data: {
      position_code: number;
      position_name: string;
      position_designation: string;
      modified_by: { id: number; user_name: string };
      modified_time: string;
    };
  }>(`/base_config/account_dictionary/${param0}/`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取职系表列表 获取职系表列表 GET /base_config/position_system/ */
export async function getBaseConfigPositionSystem(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getBaseConfigPositionSystemParams,
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
        position_code: number;
        position_name: string;
        position_designation: string;
        modified_by: { id: number; user_name: string };
        modified_time: string;
      }[];
    };
  }>('/base_config/position_system/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新增职系 新增核算单元字典表 POST /base_config/position_system/ */
export async function postBaseConfigPositionSystem(
  body: {
    /** 职系代码 */
    position_code?: number;
    /** 职系名称 */
    position_name?: string;
    /** 职系描述 */
    position_designation?: string;
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
  }>('/base_config/position_system/', {
    method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 修改某条职系表数据 PUT /base_config/position_system/${param0}/ */
export async function putBaseConfigPositionSystemId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putBaseConfigPositionSystemIdParams,
  body: {
    /** 职系代码 */
    position_code?: number;
    /** 职系名称 */
    position_name?: string;
    /** 职系描述 */
    position_designation?: string;
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
    `/base_config/position_system/${param0}/`,
    {
      method: 'PUT',
      params: { ...queryParams },
      data: formData,
      requestType: 'form',
      ...(options || {}),
    },
  );
}

/** 删除某条职系表 DELETE /base_config/position_system/${param0}/ */
export async function deleteBaseConfigPositionSystemId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteBaseConfigPositionSystemIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<Record<string, any>>(
    `/base_config/position_system/${param0}/`,
    {
      method: 'DELETE',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}

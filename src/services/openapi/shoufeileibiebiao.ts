// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取收费类别列表 获取职系表列表 GET /base_config/charge_category/ */
export async function getBaseConfigChargeCategory(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getBaseConfigChargeCategoryParams,
  options?: { [key: string]: any },
) {
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
    message: string;
    data: {
      total: number;
      page_size: number;
      page: number;
      result: {
        staff_code: number;
        staff_name: string;
        department_code: string;
        department_name: string;
        group_code: string;
        group_name: string;
        post: string;
        staff_nature: string;
        attendance_days: number;
        coefficient: string;
        bonus_category: string;
        position: string;
        job_title: string;
        work_number: string;
        modified_by: { id: number; user_name: string };
        modified_time: string;
        reason?: string;
      }[];
    };
  }>('/base_config/charge_category/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新增收费类别 新增人员信息 POST /base_config/charge_category/ */
export async function postBaseConfigChargeCategory(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.postBaseConfigChargeCategoryParams,
  body: {
    /** 类别代码 */
    charge_code?: string;
    /** 类别名称 */
    charge_name?: string;
    /** 拼音码 */
    pingying_code?: number;
    /** 自定义类型 */
    customize?: string;
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
  }>('/base_config/charge_category/', {
    method: 'POST',
    params: {
      ...params,
    },
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 获取收费类别详情 获取人员信息某条详情（预留） GET /base_config/charge_category/${param0}/ */
export async function getBaseConfigChargeCategoryId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getBaseConfigChargeCategoryIdParams,
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
  }>(`/base_config/charge_category/${param0}/`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 修改某条收费类别数据 PUT /base_config/charge_category/${param0}/ */
export async function putBaseConfigChargeCategoryId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putBaseConfigChargeCategoryIdParams,
  body: {
    /** 类别代码 */
    charge_code?: string;
    /** 类别名称 */
    charge_name?: string;
    /** 拼音码 */
    pingying_code?: number;
    /** 自定义类型 */
    customize?: string;
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
    `/base_config/charge_category/${param0}/`,
    {
      method: 'PUT',
      params: { ...queryParams },
      data: formData,
      requestType: 'form',
      ...(options || {}),
    },
  );
}

/** 删除某条收费类别 DELETE /base_config/charge_category/${param0}/ */
export async function deleteBaseConfigChargeCategoryId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteBaseConfigChargeCategoryIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<Record<string, any>>(
    `/base_config/charge_category/${param0}/`,
    {
      method: 'DELETE',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}

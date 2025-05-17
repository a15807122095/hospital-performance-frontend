// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取人员信息列表 获取职系表列表 GET /base_config/account_information/ */
export async function getBaseConfigAccountInformation(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getBaseConfigAccountInformationParams,
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
        coefficient: number;
        bonus_category: string;
        position: number;
        job_title: string;
        work_number: string;
        modified_by: { id: number; user_name: string };
        modified_time: string;
      }[];
    };
  }>('/base_config/account_information/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新增人员信息 新增人员信息 POST /base_config/account_information/ */
export async function postBaseConfigAccountInformation(
  body: {
    /** 员工编号 */
    staff_code: number;
    /** 员工名称 */
    staff_name: string;
    /** 科室代码 */
    department_code: string;
    /** 科室名称 */
    department_name: string;
    /** 组别号 */
    group_code: string;
    /** 组别名称 */
    group_name: string;
    /** 岗位 */
    post: string;
    /** 员工性质 */
    staff_nature: string;
    /** 出勤天数 */
    attendance_days: number;
    /** 原因 */
    reason?: string;
    /** 系数 */
    coefficient: number;
    /** 奖金类别 */
    bonus_category: string;
    /** 职系(从职系列表接口获取) */
    position: number;
    /** 职务 */
    job_title: string;
    /** 工作证编号 */
    work_number: string;
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
  }>('/base_config/account_information/', {
    method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 获取职系表详情 获取人员信息某条详情（预留） GET /base_config/account_information/${param0}/ */
export async function getBaseConfigAccountInformationId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getBaseConfigAccountInformationIdParams,
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
  }>(`/base_config/account_information/${param0}/`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 修改某条职系表数据 PUT /base_config/account_information/${param0}/ */
export async function putBaseConfigAccountInformationId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putBaseConfigAccountInformationIdParams,
  body: {
    /** 员工编号 */
    staff_code: number;
    /** 员工名称 */
    staff_name: string;
    /** 科室代码 */
    department_code: string;
    /** 科室名称 */
    department_name: string;
    /** 组别号 */
    group_code: string;
    /** 组别名称 */
    group_name: string;
    /** 岗位 */
    post: string;
    /** 员工性质 */
    staff_nature: string;
    /** 出勤天数 */
    attendance_days: number;
    /** 原因 */
    reason?: string;
    /** 系数 */
    coefficient: number;
    /** 奖金类别 */
    bonus_category: string;
    /** 职系(从职系列表接口获取) */
    position: number;
    /** 职务 */
    job_title: string;
    /** 工作证编号 */
    work_number: string;
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
    `/base_config/account_information/${param0}/`,
    {
      method: 'PUT',
      params: { ...queryParams },
      data: formData,
      requestType: 'form',
      ...(options || {}),
    },
  );
}

/** 删除某条职系表 DELETE /base_config/account_information/${param0}/ */
export async function deleteBaseConfigAccountInformationId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteBaseConfigAccountInformationIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<Record<string, any>>(
    `/base_config/account_information/${param0}/`,
    {
      method: 'DELETE',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}

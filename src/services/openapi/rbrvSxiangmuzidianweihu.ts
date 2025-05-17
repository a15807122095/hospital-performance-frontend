// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取项目字典维护列表 GET /base_config/rbrvs_project/ */
export async function getBaseConfigRbrvsProject(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getBaseConfigRbrvsProjectParams,
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
        charge_code: string;
        charge_name: string;
        pingying_code: string;
        customize: string;
        modified_by: { id: number; user_name: string };
        modified_time: string;
      }[];
    };
  }>('/base_config/rbrvs_project/', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新增项目字典维护 POST /base_config/rbrvs_project/ */
export async function postBaseConfigRbrvsProject(
  body: {
    /** 院区标识 */
    campus: string;
    /** 收费编码 */
    fee_code: string;
    /** 执行科室 */
    implement_department?: string;
    /** 收费名称 */
    charge_name: string;
    /** 规格 */
    specification: string;
    /** 单价 */
    unit_price: string;
    /** 新单价 */
    new_unit_price: string;
    /** 收费大类 */
    charge_category: string;
    /** 拼音码 */
    pingying_code: string;
    /** 判读点数 */
    pd_point: string;
    /** 执行点数 */
    zx_point: string;
    /** 护理点数 */
    hl_point: string;
    /** 技师点数 */
    js_point: string;
    /** 门诊规则 */
    outpatient_ragulations: string;
    /** 住院规则 */
    hospitalization_rules: string;
    /** 卫生码 */
    health_code: string;
    /** 来源 */
    source: string;
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
  }>('/base_config/rbrvs_project/', {
    method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 获取项目字典维护详情 获取人员信息某条详情（预留） GET /base_config/rbrvs_project/${param0}/ */
export async function getBaseConfigRbrvsProjectId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getBaseConfigRbrvsProjectIdParams,
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
  }>(`/base_config/rbrvs_project/${param0}/`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 修改某条项目字典维护数据 PUT /base_config/rbrvs_project/${param0}/ */
export async function putBaseConfigRbrvsProjectId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.putBaseConfigRbrvsProjectIdParams,
  body: {
    /** 院区标识 */
    campus: string;
    /** 收费编码 */
    fee_code: string;
    /** 执行科室 */
    implement_department?: string;
    /** 收费名称 */
    charge_name: string;
    /** 规格 */
    specification: string;
    /** 单价 */
    unit_price: string;
    /** 新单价 */
    new_unit_price: string;
    /** 收费大类 */
    charge_category: string;
    /** 拼音码 */
    pingying_code: string;
    /** 判读点数 */
    pd_point: string;
    /** 执行点数 */
    zx_point: string;
    /** 护理点数 */
    hl_point: string;
    /** 技师点数 */
    js_point: string;
    /** 门诊规则 */
    outpatient_ragulations: string;
    /** 住院规则 */
    hospitalization_rules: string;
    /** 卫生码 */
    health_code: string;
    /** 来源 */
    source: string;
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

  return request<Record<string, any>>(`/base_config/rbrvs_project/${param0}/`, {
    method: 'PUT',
    params: { ...queryParams },
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 删除某条项目字典维护 DELETE /base_config/rbrvs_project/${param0}/ */
export async function deleteBaseConfigRbrvsProjectId(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteBaseConfigRbrvsProjectIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<Record<string, any>>(`/base_config/rbrvs_project/${param0}/`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

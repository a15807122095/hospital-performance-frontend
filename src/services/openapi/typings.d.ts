declare namespace API {
  type deleteBaseConfigAccountDictionaryIdParams = {
    id: string;
  };

  type deleteBaseConfigAccountInformationIdParams = {
    id: string;
  };

  type deleteBaseConfigChargeCategoryIdParams = {
    id: string;
  };

  type deleteBaseConfigManuallyRecordIdParams = {
    id: string;
  };

  type deleteBaseConfigPositionSystemIdParams = {
    id: string;
  };

  type getBaseConfigAccountDictionaryIdParams = {
    id: string;
  };

  type getBaseConfigAccountDictionaryParams = {
    /** 关键字搜索：科室代码，科室名称，拼音码，院区标识 */
    keyword?: string;
    /** 外键关联职系表职系名称 */
    position?: number;
    /** 查询修改起始时间 */
    modified_time_after?: string;
    /** 查询修改结束时间 */
    modified_time_before?: string;
    /** 页码 */
    page?: number;
    /** 每页数量 */
    page_size?: number;
  };

  type getBaseConfigAccountInformationIdParams = {
    id: string;
  };

  type getBaseConfigAccountInformationParams = {
    /** 关键字搜索 */
    keyword?: string;
    /** 查询修改起始时间 */
    modified_time_after?: string;
    /** 查询修改结束时间 */
    modified_time_before?: string;
    /** 最小出勤天数 */
    attendance_days_min?: number;
    /** 最大出勤天数 */
    attendance_days_max?: number;
    /** 页码 */
    page?: number;
    /** 每页数量 */
    page_size?: number;
  };

  type getBaseConfigChargeCategoryIdParams = {
    id: string;
  };

  type getBaseConfigChargeCategoryParams = {
    /** 关键字搜索 */
    keyword?: string;
    /** 查询修改起始时间 */
    modified_time_after?: string;
    /** 查询修改结束时间 */
    modified_time_before?: string;
    /** 页码 */
    page?: string;
    /** 每页数量 */
    page_size?: string;
  };

  type getBaseConfigManuallyRecordIdParams = {
    id: string;
  };

  type getBaseConfigManuallyRecordParams = {
    /** 关键字搜索 */
    keyword?: string;
    /** 外键关联职系表主键 */
    position?: string;
    /** 查询修改起始时间 */
    modified_time_after?: string;
    /** 查询修改结束时间 */
    modified_time_before?: string;
    /** 最小参数值 */
    parameter_min?: number;
    /** 最大参数值 */
    parameter_max?: number;
    /** 页码 */
    page?: string;
    /** 每页数量 */
    page_size?: string;
  };

  type getBaseConfigPositionSystemParams = {
    /** 关键字搜索 */
    keyword?: string;
    /** 查询修改起始时间 */
    modified_time_after?: string;
    /** 查询修改结束时间 */
    modified_time_before?: string;
    /** 页码 */
    page?: number;
    /** 每页数量 */
    page_size?: number;
  };

  type postBaseConfigChargeCategoryParams = {
    /** 关键字搜索：科室代码，科室名称，拼音码，院区标识 */
    keyword?: string;
    /** 枚举：doctor(医师)，technician(技师)，nurse(护理)，admin(行政) */
    category_designation?: string;
    /** 查询修改起始时间 */
    modified_time_after?: string;
    /** 查询修改结束时间 */
    modified_time_before?: string;
    /** 页码 */
    page?: string;
    /** 每页数量 */
    page_size?: string;
  };

  type postBaseConfigManuallyRecordParams = {
    /** 关键字搜索：科室代码，科室名称，拼音码，院区标识 */
    keyword?: string;
    /** 枚举：doctor(医师)，technician(技师)，nurse(护理)，admin(行政) */
    category_designation?: string;
    /** 查询修改起始时间 */
    modified_time_after?: string;
    /** 查询修改结束时间 */
    modified_time_before?: string;
    /** 页码 */
    page?: string;
    /** 每页数量 */
    page_size?: string;
  };

  type putBaseConfigAccountDictionaryIdParams = {
    id: string;
  };

  type putBaseConfigAccountInformationIdParams = {
    id: string;
  };

  type putBaseConfigChargeCategoryIdParams = {
    id: string;
  };

  type putBaseConfigManuallyRecordIdParams = {
    id: string;
  };

  type putBaseConfigPositionSystemIdParams = {
    id: string;
  };
}


/**
 * 用户状态枚举
 */
export enum ToolTypeStatus {
  enable = 'enable',
  disable = 'disable',
}

/**
 * 工具类别数据定义
 */
export interface IToolType {
  id: string;
  name: string;
  code: string;
  status: ToolTypeStatus;
  ts: Date;
}
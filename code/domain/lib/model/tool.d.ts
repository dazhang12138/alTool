/**
 * 工具状态枚举
 */
import { IToolType } from "./tooltype";
export declare enum ToolStatus {
    enable = "enable",
    disable = "disable"
}
/**
 * 工具数据定义
 */
export interface ITool {
    id: string;
    name: string;
    code: string;
    url: string;
    title: string;
    img: string;
    memo: string;
    orderNum: number;
    frequently: boolean;
    toolType: IToolType['id'];
    status: ToolStatus;
    createdAt: Date;
    updatedAt: Date;
    ts: Date;
}
export interface IToolQuery {
    id: string;
    name: string;
    code: string;
    url: string;
    title: string;
    img: string;
    memo: string;
    orderNum: number;
    frequently: boolean;
    toolType: string;
    toolTypeName: string;
    status: ToolStatus;
    createdAt: Date;
    updatedAt: Date;
    ts: Date;
}

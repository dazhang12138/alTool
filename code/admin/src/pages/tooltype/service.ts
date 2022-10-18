import { request } from 'umi';
import {ToolTypeApiDefinition,IToolType} from '@al-tool/domain';
import {TableListItem} from "@/pages/list/table-list/data";

/**
 * 查询类别列表 GET /api/toolType/query/list
 * @param params 模糊搜索
 */
export async function queryTypeList(params: {
  search: string | null;
}): Promise<{ data: { list: IToolType[] } }> {
  return request(ToolTypeApiDefinition.queryList.client(), {
    method:ToolTypeApiDefinition.queryList.method,
    params,
  });
}

/** 新建规则 POST /api/toolType/add */
export async function addType(data: { [key: string]: any }, options?: { [key: string]: any }) {
  return request<TableListItem>(ToolTypeApiDefinition.add.client(), {
    data,
    method: ToolTypeApiDefinition.add.method,
    ...(options || {}),
  });
}

/** 修改规则 POST /api/toolType/update */
export async function updateType(data: { [key: string]: any }, options?: { [key: string]: any }) {
  return request<TableListItem>(ToolTypeApiDefinition.update.client(), {
    data,
    method: ToolTypeApiDefinition.update.method,
    ...(options || {}),
  });
}

/** 启用、停用规则 GET /api/toolType/status/enable /api/toolType/status/disable */
export async function statusUpType(status:string, params: { id: string }) {
  switch (status) {
    case 'enable':
      return request(ToolTypeApiDefinition.enable.client(), {
        method: ToolTypeApiDefinition.enable.method,
        params,
      });
    case 'disable':
      return request(ToolTypeApiDefinition.disable.client(), {
        method: ToolTypeApiDefinition.disable.method,
        params,
      });
  }
}

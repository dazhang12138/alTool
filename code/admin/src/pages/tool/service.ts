import { request } from 'umi';
import {ToolApiDefinition,ITool} from '@al-tool/domain';
import {TableListItem} from "@/pages/list/table-list/data";

/**
 * 查询列表 GET /api/tool/query/list
 * @param params 模糊搜索
 */
export async function queryToolList(params: {
  search: string | null;
}): Promise<{ data: { list: ITool[] } }> {
  return request(ToolApiDefinition.queryList.client(), {
    method:ToolApiDefinition.queryList.method,
    params,
  });
}

/** 新建规则 POST /api/tool/add */
export async function addType(data: { [key: string]: any }, options?: { [key: string]: any }) {
  return request<TableListItem>(ToolApiDefinition.add.client(), {
    data,
    method: ToolApiDefinition.add.method,
    ...(options || {}),
  });
}

/** 修改规则 POST /api/tool/update */
export async function updateType(data: { [key: string]: any }, options?: { [key: string]: any }) {
  return request<TableListItem>(ToolApiDefinition.update.client(), {
    data,
    method: ToolApiDefinition.update.method,
    ...(options || {}),
  });
}

/** 启用、停用规则 GET /api/tool/status/enable /api/tool/status/disable */
export async function statusUpType(status:string, params: { id: string }) {
  switch (status) {
    case 'enable':
      return request(ToolApiDefinition.enable.client(), {
        method: ToolApiDefinition.enable.method,
        params,
      });
    case 'disable':
      return request(ToolApiDefinition.disable.client(), {
        method: ToolApiDefinition.disable.method,
        params,
      });
  }
}

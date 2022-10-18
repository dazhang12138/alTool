export const ToolTypeApiDefinition = {

    /**
     * 服务入口地址
     */
    server:'api/tooltype',
    /**
     * 新增
     */
    add:{
        method: 'post' as const,
        server: 'add' as const,
        client: () => '/api/toolType/add',
    },
    /**
     * 修改
     */
    update:{
        method: 'post' as const,
        server: 'update' as const,
        client: () => '/api/toolType/update',
    },
    /**
     * 启用
     */
    enable:{
        method: 'get' as const,
        server: 'status/enable' as const,
        client: () => '/api/toolType/status/enable',
    },
    /**
     * 停用
     */
    disable:{
        method: 'get' as const,
        server: 'status/disable' as const,
        client: () => '/api/toolType/status/disable',
    },

    /**
     * 列表查询
     */
    queryList:{
        method: 'get' as const,
        server: 'query/list' as const,
        client: () => '/api/toolType/query/list',
    },
    /**
     * 查询详情
     */
    queryOneById:{
        method: 'get' as const,
        server: 'query/one' as const,
        client: () => '/api/toolType/query/one',
    },

    /**
     * 参照查询
     */
    queryRefer:{
        method: 'get' as const,
        server: 'query/refer' as const,
        client: () => '/api/toolType/query/refer',
    }

}
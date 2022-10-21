export const ToolApiDefinition = {

    /**
     * 服务入口地址
     */
    server:'api/tool',
    /**
     * 新增
     */
    add:{
        method: 'post' as const,
        server: 'add' as const,
        client: () => '/api/tool/add',
    },
    /**
     * 修改
     */
    update:{
        method: 'post' as const,
        server: 'update' as const,
        client: () => '/api/tool/update',
    },

    enable:{
        method: 'get' as const,
        server: 'status/enable' as const,
        client: () => '/api/tool/status/enable',
    },

    disable:{
        method: 'get' as const,
        server: 'status/disable' as const,
        client: () => '/api/tool/status/disable',
    },

    /**
     * 列表查询
     */
    queryList:{
        method: 'get' as const,
        server: 'query/list' as const,
        client: () => '/api/tool/query/list',
    },
    /**
     * 查询详情
     */
    queryOneById:{
        method: 'get' as const,
        server: 'query/one' as const,
        client: () => '/api/tool/query/one',
    },

    //按照分类过滤查询
    queryType:{
        method: 'get' as const,
        server: 'query/type' as const,
        client: () => '/api/tool/query/type'
    }

}
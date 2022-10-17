"use strict";
exports.__esModule = true;
exports.ToolApiDefinition = void 0;
exports.ToolApiDefinition = {
    /**
     * 服务入口地址
     */
    server: 'api/tool',
    /**
     * 新增
     */
    add: {
        method: 'post',
        server: 'add',
        client: function () { return '/api/tool/add'; }
    },
    /**
     * 修改
     */
    update: {
        method: 'post',
        server: 'update',
        client: function () { return '/api/tool/update'; }
    },
    enable: {
        method: 'get',
        server: 'status/enable',
        client: function () { return '/api/tool/status/enable'; }
    },
    disable: {
        method: 'get',
        server: 'status/disable',
        client: function () { return '/api/tool/status/disable'; }
    },
    /**
     * 列表查询
     */
    queryList: {
        method: 'get',
        server: 'query/list',
        client: function () { return '/api/tool/query/list'; }
    },
    /**
     * 查询详情
     */
    queryOneById: {
        method: 'get',
        server: 'query/one',
        client: function () { return '/api/tool/query/one'; }
    }
};

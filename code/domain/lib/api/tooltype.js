"use strict";
exports.__esModule = true;
exports.ToolTypeApiDefinition = void 0;
exports.ToolTypeApiDefinition = {
    /**
     * 服务入口地址
     */
    server: 'api/tooltype',
    /**
     * 新增
     */
    add: {
        method: 'post',
        server: 'add',
        client: function () { return '/api/toolType/add'; }
    },
    /**
     * 修改
     */
    update: {
        method: 'post',
        server: 'update',
        client: function () { return '/api/toolType/update'; }
    },
    /**
     * 启用
     */
    enable: {
        method: 'get',
        server: 'status/enable',
        client: function () { return '/api/toolType/status/enable'; }
    },
    /**
     * 停用
     */
    disable: {
        method: 'get',
        server: 'status/disable',
        client: function () { return '/api/toolType/status/disable'; }
    },
    /**
     * 列表查询
     */
    queryList: {
        method: 'get',
        server: 'query/list',
        client: function () { return '/api/toolType/query/list'; }
    },
    /**
     * 查询详情
     */
    queryOneById: {
        method: 'get',
        server: 'query/one',
        client: function () { return '/api/toolType/query/one'; }
    },
    /**
     * 参照查询
     */
    queryRefer: {
        method: 'get',
        server: 'query/refer',
        client: function () { return '/api/toolType/query/refer'; }
    }
};

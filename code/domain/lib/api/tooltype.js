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
    }
};

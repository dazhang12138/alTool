export declare const ToolTypeApiDefinition: {
    /**
     * 服务入口地址
     */
    server: string;
    /**
     * 新增
     */
    add: {
        method: "post";
        server: "add";
        client: () => string;
    };
    /**
     * 修改
     */
    update: {
        method: "post";
        server: "update";
        client: () => string;
    };
    enable: {
        method: "get";
        server: "status/enable";
        client: () => string;
    };
    disable: {
        method: "get";
        server: "status/disable";
        client: () => string;
    };
    /**
     * 列表查询
     */
    queryList: {
        method: "get";
        server: "query/list";
        client: () => string;
    };
    /**
     * 查询详情
     */
    queryOneById: {
        method: "get";
        server: "query/one";
        client: () => string;
    };
};

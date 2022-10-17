export declare const LoginApiDefinition: {
    /**
     * 登录服务入口
     */
    server: string;
    /**
     * 登录
     */
    account: {
        method: "post";
        server: "account";
        client: () => string;
    };
};

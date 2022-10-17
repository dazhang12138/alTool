
export const LoginApiDefinition = {

    /**
     * 登录服务入口
     */
    server: 'api/login',

    /**
     * 登录
     */
    account:{
        method: 'post' as const,
        server: 'account' as const,
        client: () => '/api/login/account',
    }
}
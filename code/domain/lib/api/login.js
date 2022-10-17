"use strict";
exports.__esModule = true;
exports.LoginApiDefinition = void 0;
exports.LoginApiDefinition = {
    /**
     * 登录服务入口
     */
    server: 'api/login',
    /**
     * 登录
     */
    account: {
        method: 'post',
        server: 'account',
        client: function () { return '/api/login/account'; }
    }
};

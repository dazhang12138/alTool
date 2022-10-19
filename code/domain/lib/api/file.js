"use strict";
exports.__esModule = true;
exports.FILE_CHUNK_SIZE = exports.FileApiDefinition = void 0;
exports.FileApiDefinition = {
    /**
     * 服务入口地址
     */
    server: 'api/file',
    /**
     * 上传ICO(工具标签ICO)
     */
    uploadICO: {
        method: 'post',
        server: 'upload/ico',
        client: function () { return '/api/file/upload/ico'; }
    },
    /**
     * 下载ICO(工具标签ICO)
     */
    downloadICO: {
        method: 'post',
        server: 'download/ico',
        client: function () { return '/api/file/download/ico'; }
    }
};
exports.FILE_CHUNK_SIZE = 2 * 1024 * 1024;

export const FileApiDefinition = {
    /**
     * 服务入口地址
     */
    server:'api/file',

    /**
     * 上传ICO(工具标签ICO)
     */
    uploadICO:{
        method: 'post' as const,
        server: 'upload/ico' as const,
        client: () => '/api/file/upload/ico',
    },

    /**
     * 下载ICO(工具标签ICO)
     */
    downloadICO:{
        method: 'post' as const,
        server: 'download/ico' as const,
        client: () => '/api/file/download/ico',
    }
}

export const FILE_CHUNK_SIZE = 2 * 1024 * 1024;
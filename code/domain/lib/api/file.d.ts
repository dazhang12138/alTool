export declare const FileApiDefinition: {
    /**
     * 服务入口地址
     */
    server: string;
    /**
     * 上传ICO(工具标签ICO)
     */
    uploadICO: {
        method: "post";
        server: "upload/ico";
        client: () => string;
    };
    /**
     * 下载ICO(工具标签ICO)
     */
    downloadICO: {
        method: "post";
        server: "download/ico";
        client: () => string;
    };
};
export declare const FILE_CHUNK_SIZE: number;

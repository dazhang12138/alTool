import {
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Query,
    StreamableFile,
    UploadedFile,
    UseInterceptors
} from "@nestjs/common";
import {FILE_CHUNK_SIZE, FileApiDefinition} from "@al-tool/domain";
import {FileInterceptor} from "@nestjs/platform-express";
import {FileService} from "@services/file.service";


@Controller(FileApiDefinition.server)
export class FileController{

    constructor(
       private readonly fileService: FileService,
    ) {}

    @Post(FileApiDefinition.uploadICO.server)
    @UseInterceptors(
        FileInterceptor('file', {
            limits: {
                fieldSize: FILE_CHUNK_SIZE,
            },
        })
    )
    async uploadICO(@UploadedFile() file){
        return await this.fileService.saveICO(file);
    }

    @Get(FileApiDefinition.downloadICO.server)
    @HttpCode(HttpStatus.OK)
    async downloadICO(@Query('id') id): Promise<StreamableFile>{
        return await this.fileService.findICO(id);
    }
}
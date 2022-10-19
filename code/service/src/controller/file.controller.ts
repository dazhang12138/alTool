import {
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Query, Res,
    StreamableFile,
    UploadedFile,
    UseInterceptors
} from "@nestjs/common";
import {FILE_CHUNK_SIZE, FileApiDefinition} from "@al-tool/domain";
import {FileInterceptor} from "@nestjs/platform-express";
import {FileService} from "@services/file.service";
import { Express } from 'express'


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
    async uploadICO(@UploadedFile() file: Express.Multer.File){
        return await this.fileService.saveICO(file);
    }

    @Get(FileApiDefinition.downloadICO.server)
    @HttpCode(HttpStatus.OK)
    async downloadICO(@Res({ passthrough: true }) res,@Query('id') id){
        let data = await this.fileService.findICO(id);
        res.set({
            'Content-Type': data.mimetype,
            'Content-Disposition': `attachment; filename="${encodeURIComponent(data.originalname)}"`,
        });
        return new StreamableFile(data.base64);
    }
}
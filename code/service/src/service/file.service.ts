import {Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {IcoEntity} from "@entitys/ico.entity";
import {InjectRepository} from "@nestjs/typeorm";
import { Express } from 'express'

@Injectable()
export class FileService{
    constructor(
        @InjectRepository(IcoEntity)
       private readonly fileRepo: Repository<IcoEntity>,
    ) {}

    /**
     * 保存ICO图片，存储base64数据 返回id
     * @param file
     */
    async saveICO(file: Express.Multer.File): Promise<string>{
        const res = await this.fileRepo.create({
            base64:file.buffer,
            mimetype:file.mimetype,
            originalname:file.originalname,
            size:file.size
        });
        const ico = await this.fileRepo.save(res);
        return ico.id;
    }

    /**
     * 查询ICO图片 返回base64数据
     * @param id
     */
    async findICO(id): Promise<IcoEntity> {
        return await this.fileRepo.findOneBy({id: id});
    }
}
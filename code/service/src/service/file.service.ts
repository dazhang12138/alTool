import {Injectable, StreamableFile} from "@nestjs/common";
import {Repository} from "typeorm";
import {IcoEntity} from "@entitys/ico.entity";
import {InjectRepository} from "@nestjs/typeorm";

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
    async saveICO(file): Promise<string>{
        const data = file.buffer.toString('base64');
        let base64 = 'data:' + file.mimetype + ';base64,' + data;
        const res = await this.fileRepo.create({base64});
        const ico = await this.fileRepo.save(res);
        return ico.id;
    }

    /**
     * 查询ICO图片 返回base64数据
     * @param id
     */
    async findICO(id): Promise<StreamableFile> {
        const icoEntity = await this.fileRepo.findOneBy({id: id});
        let img = new Buffer(icoEntity.base64, 'base64');
        return new StreamableFile(img);
    }
}
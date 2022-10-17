import {forwardRef, HttpException, HttpStatus, Inject, Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {ToolEntity} from "@entitys/tool.entity";
import {ITool, ToolTypeStatus} from "@al-tool/domain";
import {instanceToPlain} from "class-transformer";
import {ToolDto} from "@dtos/tool.dto";
import {UpdateToolDto} from "@dtos/update-tool.dto";
import {TooltypeService} from "@services/tooltype.service";


@Injectable()
export class ToolService {
    constructor(
        @InjectRepository(ToolEntity)
        private readonly toolRepo: Repository<ToolEntity>,

        @Inject(forwardRef(() => TooltypeService))
        private readonly tooltypeService: TooltypeService
    ) {}

    /**
     * 创建工具标签
     * @param tool
     */
    async createToolType(tool: ToolDto): Promise<ITool>{
        //校验唯一性
        if (await this.toolRepo.findOne({where:{ name : tool.name }})) {
            throw new HttpException('该工具标签已存在', HttpStatus.BAD_REQUEST);
        }
        if (await this.toolRepo.findOne({where:{ code: tool.code }})) {
            throw new HttpException('该工具标签已存在', HttpStatus.BAD_REQUEST);
        }
        // 校验类别是否存在，是否启用
        const type = await this.tooltypeService.findByIdAndStatus(tool.toolType,ToolTypeStatus.enable);
        if (!type){
            throw new HttpException('该工具类别未查询到数据或已停用', HttpStatus.BAD_REQUEST);
        }

        //保存类别
        const res = await this.toolRepo.create(tool);
        const created = await this.toolRepo.save(res);

        return instanceToPlain(created) as ITool;
    }

    /**
     * 更新工具标签
     * @param tool
     */
    async updateToolType(tool: UpdateToolDto): Promise<ITool> {
        const toolData = await this.findById(tool.id);
        if (!toolData){
            throw new HttpException('工具标签id查询不存在', HttpStatus.BAD_REQUEST);
        }
        //校验唯一性
        if (await this.toolRepo.findOne({where:{ name : tool.name }})) {
            throw new HttpException('该工具标签已存在', HttpStatus.BAD_REQUEST);
        }

        //修改类别
        toolData.ts = new Date();
        toolData.updatedAt = new Date();
        const res = await this.toolRepo.merge(toolData,tool);
        const ret = await this.toolRepo.save(res);

        return instanceToPlain(ret) as ITool;
    }

    /**
     * 查询全部工具标签
     * @param search
     */
    async findAllToolType(search) {
        if (search){
            return this.toolRepo.createQueryBuilder('tool')
                .orWhere('tool.name LIKE :search')
                .orWhere('tool.code LIKE :search')
                .setParameter('search', search)
                .getMany();
        }else{
            const query = this.toolRepo.createQueryBuilder('tool')
            const [data] = await query.getManyAndCount();
            return data;
        }
    }

    /**
     * 通过id查询工具标签
     * @param id 工具标签id
     */
    async findById(id): Promise<ITool> {
        const tool = await this.toolRepo.findOneBy({id:id});
        return instanceToPlain(tool) as ITool;
    }

    /**
     * 启用、停用工具标签
     * @param id id
     * @param status 更改后状态值
     */
    async statusUp(id,status) {
        const tool = await this.findById(id);
        if (!tool){
            throw new HttpException('工具标签id查询不存在', HttpStatus.BAD_REQUEST);
        }

        tool.status = status;
        tool.ts = new Date();
        tool.updatedAt = new Date();

        const ret = await this.toolRepo.save(tool);
        return instanceToPlain(ret) as ITool;
    }
}
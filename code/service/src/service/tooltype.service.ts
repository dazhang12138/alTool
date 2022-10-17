import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {ToolTypeDto} from "@dtos/tooltype.dto";
import {IToolType} from "@al-tool/domain";
import {TooltypeEntity} from "@entitys/tooltype.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {instanceToPlain} from "class-transformer";
import {UpdateToolTypeDto} from "@dtos/update-tooltype.dto";

@Injectable()
export class TooltypeService{
  constructor(
    @InjectRepository(TooltypeEntity)
    private readonly tooltypeRepo: Repository<TooltypeEntity>,
  ) {
  }

  /**
   * 创建类别
   * @param tooltype
   */
  async createToolType(tooltype: ToolTypeDto): Promise<IToolType>{
    //校验唯一性
    if (await this.tooltypeRepo.findOne({where:{ name : tooltype.name }})) {
      throw new HttpException('该类别已存在', HttpStatus.BAD_REQUEST);
    }
    if (await this.tooltypeRepo.findOne({where:{ code: tooltype.code }})) {
      throw new HttpException('该类别已存在', HttpStatus.BAD_REQUEST);
    }

    //保存类别
    const res = await this.tooltypeRepo.create(tooltype);
    const createdType = await this.tooltypeRepo.save(res);

    return instanceToPlain(createdType) as IToolType;
  }

  /**
   * 更新类别
   * @param tooltype
   */
  async updateToolType(tooltype: UpdateToolTypeDto): Promise<IToolType> {
    const type = await this.findById(tooltype.id);
    if (!type){
      throw new HttpException('类别id查询不存在', HttpStatus.BAD_REQUEST);
    }
    //校验唯一性
    if (await this.tooltypeRepo.findOne({where:{ name : tooltype.name }})) {
      throw new HttpException('该类别已存在', HttpStatus.BAD_REQUEST);
    }

    //修改类别
    type.ts = new Date();
    const res = await this.tooltypeRepo.merge(type,tooltype);
    const ret = await this.tooltypeRepo.save(res);

    return instanceToPlain(ret) as IToolType;
  }

  /**
   * 查询全部类别
   * @param search
   */
  async findAllToolType(search) {
    if (search){
      return this.tooltypeRepo.createQueryBuilder('tooltype')
          .orWhere('tooltype.name LIKE :search')
          .orWhere('tooltype.code LIKE :search')
          .setParameter('search', search)
          .getMany();
    }else{
      const query = this.tooltypeRepo.createQueryBuilder('tooltype')
      const [data] = await query.getManyAndCount();
      return data;
    }
  }

  /**
   * 通过id查询工具类别
   * @param id 工具类别id
   */
  async findById(id): Promise<IToolType> {
    const type = await this.tooltypeRepo.findOneBy({id:id});
    return instanceToPlain(type) as IToolType;
  }
}
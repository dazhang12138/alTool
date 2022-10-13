import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ToolTypeDto } from "@dtos/tooltype.dto";
import { IToolType } from "@models/tooltype";
import { TooltypeEntity } from "@entitys/tooltype.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { instanceToPlain } from "class-transformer";

@Injectable()
export class TooltypeService{
  constructor(
    @InjectRepository(TooltypeEntity)
    private readonly tooltypeRepo: Repository<TooltypeEntity>,
  ) {
  }

  async createToolType(tooltype: ToolTypeDto): Promise<IToolType>{
    //校验唯一性
    if (await this.tooltypeRepo.findOne({where:{ name : tooltype.name }})) {
      throw new HttpException('该类别已存在', HttpStatus.BAD_REQUEST);
    }
    if (await this.tooltypeRepo.findOne({where:{ code: tooltype.code }})) {
      throw new HttpException('该类别已存在', HttpStatus.BAD_REQUEST);
    }

    const res = await this.tooltypeRepo.create(tooltype);
    const createdUser = await this.tooltypeRepo.save(res);

    return instanceToPlain(createdUser) as IToolType;
  }
}
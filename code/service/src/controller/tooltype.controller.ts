import {Body, Controller, Get, HttpCode, HttpException, HttpStatus, Post, Query, Request} from "@nestjs/common";
import { ToolTypeDto } from "@dtos/tooltype.dto";
import { TooltypeService } from "@services/tooltype.service";
import {UpdateToolTypeDto} from "@dtos/update-tooltype.dto";

@Controller('toolType')
export class ToolTypeController {

  constructor(private readonly tooltypeService: TooltypeService) {
  }

  @Post('add')
  @HttpCode(HttpStatus.OK)
  async add(@Body() tooltype: ToolTypeDto){
    if (!tooltype || !tooltype.name || !tooltype.code){
      throw new HttpException('名称编码不能为空', HttpStatus.BAD_REQUEST);
    }
    return await this.tooltypeService.createToolType(tooltype);
  }

  @Post('update')
  @HttpCode(HttpStatus.OK)
  async update(@Body() tooltype: UpdateToolTypeDto){
    if (!tooltype || !tooltype.name){
      throw new HttpException('名称不能为空', HttpStatus.BAD_REQUEST);
    }
    return await this.tooltypeService.updateToolType(tooltype);
  }

  @Get('query/list')
  @HttpCode(HttpStatus.OK)
  async queryList(@Query('search') search){
    return await this.tooltypeService.findAllToolType(search && '%'+search+'%');
  }

  @Get('query/one')
  @HttpCode(HttpStatus.OK)
  async queryOneById(@Request() req, @Query('id') id){
    return await this.tooltypeService.findById(id);
  }

}
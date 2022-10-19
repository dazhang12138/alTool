import {Body, Controller, Get, HttpCode, HttpException, HttpStatus, Post, Query, Request} from "@nestjs/common";
import {FileApiDefinition, ToolApiDefinition} from "@al-tool/domain";
import {ToolDto} from "@dtos/tool.dto";
import {UpdateToolDto} from "@dtos/update-tool.dto";
import {ToolService} from "@services/tool.service";

@Controller(ToolApiDefinition.server)
export class ToolController{

    constructor(private readonly toolService: ToolService) {}

    @Post(ToolApiDefinition.add.server)
    @HttpCode(HttpStatus.OK)
    async add(@Body() tool: ToolDto){
        if (!tool || !tool.name || !tool.code){
            throw new HttpException('名称编码不能为空', HttpStatus.BAD_REQUEST);
        }
        return await this.toolService.createToolType(tool);
    }

    @Post(ToolApiDefinition.update.server)
    @HttpCode(HttpStatus.OK)
    async update(@Body() tool: UpdateToolDto){
        if (!tool || !tool.name){
            throw new HttpException('名称不能为空', HttpStatus.BAD_REQUEST);
        }
        return await this.toolService.updateToolType(tool);
    }

    @Get(ToolApiDefinition.enable.server)
    @HttpCode(HttpStatus.OK)
    async enable(@Query('id') id){
        return await this.toolService.statusUp(id,'disable');
    }

    @Get(ToolApiDefinition.disable.server)
    @HttpCode(HttpStatus.OK)
    async disable(@Query('id') id){
        return await this.toolService.statusUp(id,'enable');
    }

    @Get(ToolApiDefinition.queryList.server)
    @HttpCode(HttpStatus.OK)
    async queryList(@Query('search') search){
        let data = await this.toolService.findAllToolType(search && '%'+search+'%');
        data.map(item => {
            item.img = FileApiDefinition.downloadICO.client()+'?id='+item.img;
        })
        return {
            status:'ok',
            data:{
                list:data
            }
        };
    }

    @Get(ToolApiDefinition.queryOneById.server)
    @HttpCode(HttpStatus.OK)
    async queryOneById(@Request() req, @Query('id') id){
        return await this.toolService.findById(id);
    }
}
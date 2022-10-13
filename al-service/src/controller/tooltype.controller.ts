import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { ToolTypeDto } from "@dtos/tooltype.dto";
import { TooltypeService } from "@services/tooltype.service";

@Controller('toolType')
export class ToolTypeController {

  constructor(private readonly tooltypeService: TooltypeService) {
  }

  @Post('add')
  @HttpCode(HttpStatus.OK)
  async add(@Body() tooltype: ToolTypeDto){
    return await this.tooltypeService.createToolType(tooltype);
  }

}
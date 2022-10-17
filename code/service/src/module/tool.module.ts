import {forwardRef, Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule} from "@nestjs/config";
import {ToolEntity} from "@entitys/tool.entity";
import {ToolController} from "@controllers/tool.controller";
import {ToolService} from "@services/tool.service";
import {TooltypeModule} from "@modules/tooltype.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([ToolEntity]),
        ConfigModule,
        forwardRef(()=>TooltypeModule)
    ],
    controllers: [ToolController],
    providers: [ToolService],
})
export class ToolModule {}

import { Module } from '@nestjs/common';
import { ToolTypeController } from "@controllers/tooltype.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule} from "@nestjs/config";
import {TooltypeEntity} from "@entitys/tooltype.entity";
import {TooltypeService} from "@services/tooltype.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([TooltypeEntity]),
    ConfigModule,
  ],
  controllers: [ToolTypeController],
  providers: [TooltypeService],
})
export class TooltypeModule {}

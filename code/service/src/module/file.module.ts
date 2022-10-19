import {Module} from "@nestjs/common";
import {FileController} from "@controllers/file.controller";
import {FileService} from "@services/file.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {IcoEntity} from "@entitys/ico.entity";
import {ConfigModule} from "@nestjs/config";


@Module({
    imports:[
        TypeOrmModule.forFeature([IcoEntity]),
        ConfigModule,
    ],
    controllers:[FileController],
    providers:[FileService]
})
export class FileModule{}
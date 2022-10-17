import { forwardRef, Inject, Module } from "@nestjs/common";
import { TooltypeModule } from "@modules/tooltype.module";
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TooltypeEntity } from "@entitys/tooltype.entity";
import { getConfig } from "./config";
import {LoginModule} from "@modules/login.module";

const ENTITIES = [
  TooltypeEntity
]
const MODULES = [
  TooltypeModule,
  LoginModule
]
@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      load: [getConfig],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'mysql',
          entities: ENTITIES,
          keepConnectionAlive: true,
          ...config.get('db.mysql'),
        } as TypeOrmModuleOptions;
      },
    }),
    ...MODULES
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(
    @Inject(forwardRef(() => ConfigService))
    private readonly configService: ConfigService) {
  }
}

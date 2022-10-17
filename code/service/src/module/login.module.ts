import {Module} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";
import {LoginController} from "@controllers/login.controller";

@Module({
    imports: [
        ConfigModule,
    ],
    controllers: [LoginController],
    providers: [],
})
export class LoginModule{}
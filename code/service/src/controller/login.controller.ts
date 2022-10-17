import {Body, Controller, HttpCode, HttpStatus, Post} from "@nestjs/common";
import {LoginDto} from "@dtos/login.dto";
import {ConfigService} from "@nestjs/config";
import {LoginApiDefinition} from "@al-tool/domain";


@Controller(LoginApiDefinition.server)
export class LoginController {

    constructor(
        private readonly confifgService: ConfigService,
    ) {
    }

    @Post(LoginApiDefinition.account.server)
    @HttpCode(HttpStatus.OK)
    async account(@Body() login: LoginDto){
        const config = await this.confifgService.get('altool.admin');
        let adminuser = {
            status: 'error',
            type:login.type,
            currentAuthority: 'guest',
        }
        if (config.code === login.username && config.password === login.password){
            adminuser.status = 'ok';
            adminuser.type = login.type;
            adminuser.currentAuthority = 'admin';
        }
        return adminuser;
    }


}
import {IsBoolean, IsNotEmpty, IsString, MinLength} from "class-validator";

export class LoginDto {

    @IsBoolean({message: 'autoLogin类型错误（正确类型为：boolean）'})
    autoLogin: boolean;

    @IsString({ message: '密码类型错误（正确类型为：String）' })
    @IsNotEmpty({ message: '密码不能为空' })
    password: string;

    @IsString({ message: 'type类型错误（正确类型为：String）' })
    type: string;

    @IsString({ message: '登录名类型错误（正确类型为：String）' })
    @IsNotEmpty({ message: '登录名不能为空' })
    username: string;
}
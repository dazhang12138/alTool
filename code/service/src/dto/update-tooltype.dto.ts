import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class UpdateToolTypeDto{

  @MinLength(1, { message: '类别名称至少1个字符' })
  @IsString({ message: '类别名称类别错误（正确类型为：String）' })
  @IsNotEmpty({ message: '类别名称不能为空' })
  name: string;

  @MinLength(36, { message: 'id至少36个字符' })
  @IsString({ message: 'id类型错误（正确类型为：String）' })
  @IsNotEmpty({ message: 'id不能为空' })
  id: string;
}
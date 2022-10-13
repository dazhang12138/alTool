import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class ToolTypeDto{

  @MinLength(1, { message: '类别名称至少1个字符' })
  @IsString({ message: '类别名称类别错误（正确类型为：String）' })
  @IsNotEmpty({ message: '类别名称不能为空' })
  name: string;

  @MinLength(1, { message: '类别编码至少1个字符' })
  @IsString({ message: '类别编码类型错误（正确类型为：String）' })
  @IsNotEmpty({ message: '类别编码不能为空' })
  code: string;
}
import {IsBoolean, IsNotEmpty, IsNumber, IsPositive, IsString, MinLength} from "class-validator";
import {IToolType} from "@al-tool/domain";


export class UpdateToolDto {

    @MinLength(36, { message: 'id至少36个字符' })
    @IsString({ message: 'id类型错误（正确类型为：String）' })
    @IsNotEmpty({ message: 'id不能为空' })
    id: string;

    @MinLength(1, { message: '名称至少1个字符' })
    @IsString({ message: '名称类别错误（正确类型为：String）' })
    @IsNotEmpty({ message: '名称不能为空' })
    name: string;

    @MinLength(1, { message: 'URL至少1个字符' })
    @IsString({ message: 'URL类型错误（正确类型为：String）' })
    @IsNotEmpty({ message: 'URL不能为空' })
    url: string;

    @MinLength(1, { message: '标题至少1个字符' })
    @IsString({ message: '标题类型错误（正确类型为：String）' })
    @IsNotEmpty({ message: '标题不能为空' })
    title: string;

    @MinLength(1, { message: 'ICO至少1个字符' })
    @IsString({ message: 'ICO类型错误（正确类型为：String）' })
    @IsNotEmpty({ message: 'ICO不能为空' })
    img: string;

    @MinLength(1, { message: '描述|备注至少1个字符' })
    @IsString({ message: '描述|备注类型错误（正确类型为：String）' })
    @IsNotEmpty({ message: '描述|备注不能为空' })
    memo: string;

    @IsNumber({},{ message: '序列类型错误（正确类型为：number）' })
    @IsPositive({ message: '序列值不能为负数' })
    @IsNotEmpty({ message: '序列不能为空' })
    orderNum: number;

    @IsBoolean({ message: '是否常用类型错误（正确类型为：boolean）' })
    @IsNotEmpty({ message: '是否常用不能为空' })
    frequently: boolean;

    @MinLength(36, { message: '工具类别至少36个字符' })
    @IsString({ message: '工具类别类型错误（正确类型为：String）' })
    @IsNotEmpty({ message: '工具类别不能为空' })
    toolType: IToolType['id'];
}
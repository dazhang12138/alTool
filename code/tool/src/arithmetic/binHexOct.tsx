

export class BinHexOct {

    public binhexOct = (value: string, scale: number) => {
        //进制支持2-62值
        if (scale < 2 || scale > 62){
            throw new Error("进制值设置错误!");
        }
        //校验数值是否符合进制
        if (!this.verify(value,scale)){
            //数值不符合
            throw new Error("输入值不符合进制规则!");
        }
        //数值转换十进制
        let tenvalue = parseInt(value);
        console.log('转换十进制:',tenvalue);
        //十进制数值转换各进制

    }

    private verify = (value: string, scale: number) => {
        let expression: RegExp;
        switch (scale) {
            case 2:expression = /^[0-1]*$/; break;
            case 8:expression = /^[0-7]*$/; break;
            case 10:expression = /^\d*$/; break;
            case 16:expression = /^([1-9A-F][\dA-F]*|0)$/; break;
            case 26:expression = /^([a-z]*|0)$/; break;
            case 32:expression = /^([1-9A-HJKMNP-Z][\dA-HJKMNP-Z]*|0)$/; break;
            case 36:expression = /^([1-9a-z][\da-z]*|0)$/; break;
            case 52:expression = /^([a-zA-Z]*|0)$/; break;
            case 58:expression = /^([1-9a-zA-Z][\da-fA-F]*|0)$/; break;
            case 62:expression = /^([1-9a-zA-Z][\da-zA-Z]*|0)$/; break;
            default:expression = /$^/;
        }
        return expression.test(value);
    }
}
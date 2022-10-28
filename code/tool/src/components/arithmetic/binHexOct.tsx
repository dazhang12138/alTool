
const basenum = '0123456789';
const baseaz = 'abcdefghijklmnopqrstuvwxyz';
const baseAZ = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

//用于输入进制值与base2区别为 输入值与输出值进制规则不一致，输入值base进制规则为09azAZ一次递增，而输出base2进制规则为固定规则
const base = {} as Partial<{ [key:number]:any }>
const base2 = {
    2:'01',
    8:'01234567',
    10: basenum,
    16: basenum + 'ABCDEF',
    26: baseaz,
    32: basenum + baseAZ.replace('I','')
                        .replace('L','')
                        .replace('O','')
                        .replace('U',''),
    36: basenum + baseaz,
    52: baseaz + baseAZ,
    58: basenum.replace('0','')
        + baseaz.replace('l','')
        + baseAZ.replace('O','')
                .replace('I',''),
    62: basenum + baseaz + baseAZ,
} as Partial<{ [key:number]:any }>

for (let i=2; i <= 10; i++) {
    //初始化2-10
    base[i] = basenum.substring(0,i);
}
for (let i=11; i <= 36; i++) {
    //初始化11-36
    base[i] = basenum + baseAZ.substring(0,i-10);
}
for (let i=37; i <= 62; i++) {
    //初始化37-62
    base[i] = basenum + baseaz + baseAZ.substring(0,i-36);
}

export const binhexOct = (value: string, scale: number):Partial<{ [key:number]:any }> =>{
    //进制支持2-62值
    if (scale < 2 || scale > 62){
        throw new Error("进制值设置错误!");
    }
    value = value.replace(/\s/g,'');
    if (scale === 2){
        //二进制允许前置0
        value = value.replace(/\b(0+)/gi,'');
    }
    //校验数值是否符合进制
    if (!verify(value,scale)){
        //数值不符合
        throw new Error("输入值不符合进制规则!");
    }
    //数值转换十进制
    let value10 = to10(value,scale);
    //十进制数值转换各进制
    let value2 = toBase(value10,2);
    let value8 = toBase(value10,8);
    let value16 = toBase(value10,16);
    let value26 = toBase(value10,26);
    let value32 = toBase(value10,32);
    let value36 = toBase(value10,36);
    let value52 = toBase(value10,52);
    let value58 = toBase(value10,58);
    let value62 = toBase(value10,62);
    return {
        2: value2.toString(),
        8: value8.toString(),
        10: value10.toString(),
        16: value16.toString(),
        26: value26.toString(),
        32: value32.toString(),
        36: value36.toString(),
        52: value52.toString(),
        58: value58.toString(),
        62: value62.toString(),
    }
}
const to10 = (value: string, scale: number) => {
    value = value.split('').reverse().join('');
    let baseVale = base[scale];
    let val: bigint  = BigInt(0);
    for (let i = 0; i < value.length; i++) {
        let c = value[i];
        val += BigInt(baseVale.indexOf(c) * Math.pow(scale, i));
    }
    return val;
}
function toBase(num: bigint, scale: number) {
    let baseVale = base2[scale];
    let ben = BigInt(baseVale.length);
    let arr = [];
    while (num > 0) {
        arr.push(baseVale[(num % ben).toString()]);
        num = BigInt(Math.floor(Number.parseInt((num / ben).toString())));
    }
    //数组反转，因为个位在索引0的位置，应反过来显示
    return arr.reverse().join('');

}
const verify = (value: string, scale: number) => {
    let baseVale = base[scale];
    let expression: RegExp;
    expression = new RegExp("^([" + baseVale.replace('0','') + "][" + baseVale + "]*|0)$");
    return expression.test(value);
}
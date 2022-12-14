
export const commomData = [
    {
        key:'匹配邮箱',
        dataRegex:`\\w[-\\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\\.)+[A-Za-z]{2,14}`
    },{
        key:'匹配中文',
        dataRegex:`[\\u4e00-\\u9fa5]+`
    },{
        key:'匹配双字节字符（包含汉字）',
        dataRegex:`[^\\x00-\\xff]+`
    },{
        key:'匹配时间（时:分:秒）',
        dataRegex:`([01]?\\d|2[0-3]):[0-5]?\\d:[0-5]?\\d`
    },{
        key:'匹配IP（IPV4）',
        dataRegex:`\\d{0,3}\\.\\d{0,3}\\.\\d{0,3}\\.\\d{0,3}`
    },{
        key:'匹配身份证',
        dataRegex:`\\d{17}[0-9Xx]|\\d{15}`
    },{
        key:'匹配日期（年-月-日）',
        dataRegex:`(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)`
    },{
        key:'匹配正整数',
        dataRegex:`[1-9]\\d*`
    },{
        key:'匹配负整数',
        dataRegex:`-[1-9]\\d*`
    },{
        key:'匹配手机号',
        dataRegex:`(13\\d|14[579]|15[^4\\D]|17[^49\\D]|18\\d)\\d{8}`
    },{
        key:'电驴链接',
        dataRegex:`ed2k://\\|file\\|([^\\|]+?)\\|(\\d+?)\\|([0-9a-zA-Z]{32})\\|((?:/\\|sources,([^\\s\\|]+?)\\||h=([0-9a-zA-Z]{32})\\||s=([^\\s\\|]+?)\\||p=([^\\s\\|]+?)\\|)*)/`
    },{
        key:'匹配车牌号',
        dataRegex:`(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))`
    }
]

export const checkboxGroupOptions = [
    { label: '全部(g)', value: 'g' },
    { label: '不区分大小写(i)', value: 'i' },
    { label: '多行 (m)', value: 'm' },
    { label: '单行 (s)', value: 's' }
];

export const defaultText = `下面是一些测试实例:
history: v1.0 正则表达式测试工具上线
         v1.1 2012-03-25 修复高亮偏移错位的问题
         v1.2 2014-06-15 增加生成程序代码的功能
         v1.3 2014-09-04 增加java代码的生成，修正邮箱的匹配
             1. 截至目前为止，最长域名后缀 .cancerresearch
         v1.4 2016-03-12 重写代码生成引擎，解决生成的bug
         v1.5 2017-10-29 彻底重写测试功能解决文本过长时产生的高亮bug
         v1.6 2020-07-12 增加dart语言的正则生成
notice: 由于我们使用的是js的正则引擎，所以暂时还不能支持逆序环视
demo@qq.com
tool-lu@vip.qq.com
tool+lu@gmail.com
demo@live.com
127.0.0.1
http://tool.lu/
https://tool.lu/
123456789012345
16:09:22`;

export const defaultCode = (regular:string,global:string)=>{
    return {
        '1':`var pattern = /${regular}/${global},
\tstr = '';
console.log(pattern.test(str));`,
        '2':`$str = '';
$isMatched = preg_match_all('/${regular}/', $str, $matches);
var_dump($isMatched, $matches);`,
        '3':`package main

import (
\t"fmt"
\t"regexp"
)

func main() {
\tstr := "test"
\tmatched, err := regexp.MatchString("${regular.replace(new RegExp(/\\/,("gm")),'\\\\')}", str)
\tfmt.Println(matched, err)
}`,
        '4':`pattern = /${regular}/
str = ''
p pattern.match(str)`,
        '5':`import re
pattern = re.compile(ur'${regular}')
str = u''
print pattern.search(str)`,
        '6':`import re
pattern = re.compile(r'${regular}')
str = ''
print(pattern.search(str))`,
        '7':`import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegexMatches {
\t
\tpublic static void main(String args[]) {
\t\tString str = "";
\t\tString pattern = "${regular.replace(new RegExp(/\\/,("gm")),'\\\\')}";

\t\tPattern r = Pattern.compile(pattern);
\t\tMatcher m = r.matcher(str);
\t\tSystem.out.println(m.matches());
\t}

}`,
        '8':`NSString *str = @"";
NSString *pattern = @"${regular.replace(new RegExp(/\\/,("gm")),'\\\\')}";
NSError *error = NULL;
NSRegularExpression *regex = [NSRegularExpression regularExpressionWithPattern: pattern options: nil error: &error];
NSArray *match = [regex matchesInString: str options: NSMatchingCompleted range: NSMakeRange(0, [str length])];
if (match.count != 0) {
\t// ...
}`,
        '9':`String str = "";
RegExp pattern = new RegExp(r"${regular}");
pattern.hasMatch(str);`
    }
}
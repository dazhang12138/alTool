import {Space, Typography} from "@douyinfe/semi-ui";
import React from "react";

const { Paragraph } = Typography;

const text2 = (text: string)=>{
    while (text.length % 4 > 0){
        text = "0" + text;
    }
    text = text.replace(/\s/g,'')
        .replace(/(.{4})/g,'$1 ')
        .replace(/(^\s*)|(\s*$)/g,'');
    return(
        <Paragraph copyable={{content:text,copyTip:'格式化复制'}}></Paragraph>
    )
}

export const columns = [
    {
        title: '进制',
        dataIndex: 'value',
        width:'10%'
    },
    {
        title: '结果',
        dataIndex: 'result',
        width:'50%',
        render: (text: any,record: any) => {
            return (
                <div>
                    <Space><Paragraph copyable>{text}</Paragraph>
                        {record.key === '2' && text2(text)}</Space>
                </div>
            );
        }
    },
    {
        title: '解释',
        dataIndex: 'memo',
        width:'40%'
    },
]

export const datas = (result: any) => [
    {
        key:'2',
        value:'2进制',
        result:result[2],
        memo:'0,1'
    },
    {
        key:'8',
        value:'8进制',
        result:result[8],
        memo:'0-7'
    },
    {
        key:'10',
        value:'10进制',
        result:result[10],
        memo:'0-9'
    },
    {
        key:'16',
        value:'16进制',
        result:result[16],
        memo:'0-9,A-F'
    },
    {
        key:'26',
        value:'26进制',
        result:result[26],
        memo:'小写字母'
    },
    {
        key:'32',
        value:'32进制',
        result:result[32],
        memo:'数字 + 大写字母，不包含 ILOU 字符'
    },
    {
        key:'36',
        value:'36进制',
        result:result[36],
        memo:'数字 + 小写字母'
    },
    {
        key:'52',
        value:'52进制',
        result:result[52],
        memo:'大小写字母'
    },
    {
        key:'58',
        value:'58进制',
        result:result[58],
        memo:'数字 + 大小写字母，不包含 0OlI 字符'
    },
    {
        key:'62',
        value:'62进制',
        result:result[62],
        memo:'数字 + 大小写字母'
    },
]
import React, {useState} from "react";
import {
    Breadcrumb,
    Button,
    Divider,
    Input,
    InputNumber,
    Radio,
    RadioGroup,
    Slider,
    Space,
    Table
} from "@douyinfe/semi-ui";
import { Typography } from '@douyinfe/semi-ui';
import { IconHome, IconPriceTag, IconLink } from '@douyinfe/semi-icons';
const { Title, Text, Paragraph } = Typography;

const columns = [
    {
        title: '进制',
        dataIndex: 'value',
        width:'10%'
    },
    {
        title: '结果',
        dataIndex: 'result',
        width:'50%'
    },
    {
        title: '解释',
        dataIndex: 'memo',
        width:'40%'
    },
]
const markValue = [2,8,10,16,32,36,58,62];

const AlBinHexOct = () => {

    const [value, setValue] = useState(2);
    const [numericalValue,setNumericalValue] = useState('1001');
    const [result,setResult] = useState({
        2:'1001',
        8:'11',
        10:'9',
        16:'9',
        26:'j',
        32:'9',
        36:'9',
        52:'j',
        58:'a',
        62:'9',
    });

    const data = [
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
            memo:'0-9,a-f'
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

    return(
        <div style={{margin: '20px 10px'}}>
            <Breadcrumb compact={false}>
                <Breadcrumb.Item icon={<IconHome size="small" />}></Breadcrumb.Item>
                <Breadcrumb.Item icon={<IconPriceTag size="small" />}>开发类</Breadcrumb.Item>
                <Breadcrumb.Item>进制转换</Breadcrumb.Item>
            </Breadcrumb>

            <Title heading={2} style={{ margin: '8px 0' }} >进制转换</Title>

            <RadioGroup
                type='button' buttonSize='large' defaultValue={2} name="radio" value={value}
                onChange={({target})=>{
                    target && target.value && setValue(target.value);
                }}
            >
                {markValue.map((item)=>{
                    return <Radio value={item}>{item}进制</Radio>
                })}
            </RadioGroup>
            <Divider layout="vertical" margin='12px'/>
            <Text strong>更多: </Text>
            <InputNumber hideButtons disabled style={{ width: 40 }} defaultValue={2} min={2} max={62} value={value} />
            <Slider
                step={1} min={2} max={62} value={value}
                onChange={(value) => {
                    if (typeof value === 'number'){
                        setValue(value);
                    }
                }}
                marks={{2:'2',8:'8',10:'10',16:'16',32:'32',36:'36',58:'58',62:'62'}}
            ></Slider>
            <br/>
            <Space style={{width: '100%'}}>
                <Input
                    style={{ width: '75%' }} defaultValue={numericalValue}
                    onChange={(value)=>{
                        setNumericalValue(value);
                    }}
                />
                <Button
                    theme='solid' type='primary' style={{ marginRight: 8 }}
                    onClick={()=>{
                        console.log(numericalValue,value);
                    }}
                >
                    转换
                </Button>
            </Space>
            <br/>
            <Divider margin='12px' align='left' >结果</Divider>
            <br/>
            <Table columns={columns} dataSource={data} pagination={false}/>
            <Title heading={4} style={{ margin: '8px 0' }} >简介</Title>
            <Paragraph spacing="extended">
                进位制其实是一种记数的方式，所以也称为进位记数法/位值计数法，可以用有限的数字符号代表所有的数值。 可使用数字符号的数目称为基数（英文：radix）或底数，基数为n，即可称n进位制，简称n进制。 例如平常生活中我们经常用到的十进制，就是使用10个阿拉伯数字0-9进行记数，所以它的基数就是10，称为十进制。
            </Paragraph>
            <Space vertical align='start' style={{marginLeft:15}}>
                <Text link={{href:'https://www.rfc-editor.org/rfc/rfc4648',target:'_blank'}} icon={<IconLink />} underline>
                    进制规范文档：The Base16, Base32, and Base64 Data Encodings
                </Text>
                <Text link={{href:'https://www.crockford.com/base32.html',target:'_blank'}} icon={<IconLink />} underline>
                    32进制规范 (不包含 ILOU)
                </Text>
            </Space>
        </div>
    )
}

export default AlBinHexOct;
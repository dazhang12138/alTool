import React, {useState} from "react";
import {
    Breadcrumb,
    Button,
    DatePicker,
    Divider,
    InputNumber,
    Select,
    Space,
    TextArea,
    Typography
} from "@douyinfe/semi-ui";
import {IconHome, IconPriceTag} from "@douyinfe/semi-icons";
import './index.css'
const { Title,Paragraph } = Typography;

export const AlDateTimeCalculator = () => {

    const week = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];

    const [value1,setValue1] = useState(new Date());
    const [value2,setValue2] = useState(new Date('2023-1-1'));
    const [value3,setValue3] = useState(new Date());
    const [value4,setValue4] = useState('a');
    const [value5,setValue5] = useState('d');
    const [value6,setValue6] = useState(0);
    const [placeholder,setPlaceholder] = useState('');
    const [placeholder2,setPlaceholder2] = useState('');

    return(
        <div style={{margin: '20px 10px'}}>
            <Breadcrumb compact={false}>
                <Breadcrumb.Item icon={<IconHome size="small" />}></Breadcrumb.Item>
                <Breadcrumb.Item icon={<IconPriceTag size="small" />}>查询类</Breadcrumb.Item>
                <Breadcrumb.Item>时间日期计算器</Breadcrumb.Item>
            </Breadcrumb>

            <Title heading={2} style={{ margin: '8px 0' }} >时间日期计算器</Title>
            <Title heading={4} style={{ margin: '8px 0' }} >计算日期差</Title>
            <Space vertical align={'start'}>
                <Space>
                    <DatePicker style={{ width: 240 }} value={value1} onChange={(date)=>{ if (date instanceof Date) setValue1(date)}}/>
                    <Button theme='light' type='tertiary' onClick={()=>setValue1(new Date())}>设置为今天</Button>
                    <DatePicker insetLabel="距" style={{ width: 240 }} value={value2} onChange={(date)=>{ if (date instanceof Date) setValue2(date)}}/>
                    <Button theme='light' type='tertiary' onClick={()=>setValue2(new Date())}>设置为今天</Button>
                </Space>
                <Space>
                    <Button theme='light' type='secondary' onClick={()=>{
                        let diffDate = value2.getTime() - value1.getTime();
                        let totalDays = Math.floor(diffDate / (1000 * 3600 * 24))
                        setPlaceholder(totalDays + '天');
                    }}>相差(计算)</Button>
                    <TextArea value={placeholder} className='semi-input-textarea-my' showClear readonly autosize style={{ width: 600, marginTop: 4 }} rows={1} />
                </Space>
            </Space>
            <Divider margin={12}/>
            <Title heading={4} style={{ margin: '8px 0' }} >推算日期</Title>
            <Space vertical align={'start'}>
                <Space>
                    <DatePicker style={{ width: 240 }} value={value3} onChange={(date)=>{ if (date instanceof Date) setValue3(date)}}/>
                    <Button theme='light' type='tertiary' onClick={()=>setValue3(new Date())}>设置为今天</Button>
                    <Select defaultValue='a' value={value4} onChange={(value)=>{if (typeof value === 'string') setValue4(value)}}>
                        <Select.Option value='a'>往前</Select.Option>
                        <Select.Option value='b'>往后</Select.Option>
                    </Select>
                    <InputNumber value={value6} onChange={(value)=>{if (typeof value === 'number') setValue6(value)}}></InputNumber>
                    <Select defaultValue='d' value={value5} onChange={(value)=>{if (typeof value === 'string') setValue5(value)}}>
                        <Select.Option value='d'>天</Select.Option>
                        <Select.Option value='w'>星期</Select.Option>
                        <Select.Option value='m'>月</Select.Option>
                    </Select>
                </Space>
                <Space>
                    <Button theme='light' type='secondary' onClick={()=>{
                        let date = new Date(value3);
                        if (value5 === 'd'){
                            if (value4 === 'a'){
                                date.setDate(date.getDate() + value6);
                            }else {
                                date.setDate(date.getDate() - value6);
                            }
                        }else if (value5 === 'w'){
                            if (value4 === 'a'){
                                date.setDate(date.getDate() + value6*7);
                            }else {
                                date.setDate(date.getDate() - value6*7);
                            }
                        }else{
                            if (value4 === 'a'){
                                date.setMonth(date.getMonth() + value6);
                            }else {
                                date.setMonth(date.getMonth() - value6);
                            }
                        }
                        setPlaceholder2(date.getFullYear()+'年'+(date.getMonth()+1)+'月'+date.getDate()+'日 '+week[date.getDay()])
                    }}>是(计算)</Button>
                    <TextArea value={placeholder2} className='semi-input-textarea-my' showClear readonly autosize style={{ width: 600, marginTop: 4 }} rows={1} />
                </Space>
            </Space>
            <Divider margin={12}/>
            <Title heading={4} style={{ margin: '8px 0' }} >简介</Title>
            <Paragraph>
                日期计算器可以帮你算出出生至今一共活了多少天、距离节日、高考、考研、纪念日等日期还有多少天。
            </Paragraph>
        </div>
    );
}

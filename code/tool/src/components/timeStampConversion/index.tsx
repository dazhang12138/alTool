import React, {useEffect, useRef, useState} from "react";
import {Breadcrumb, Button, Input, InputNumber, Select, Space, Table, Typography} from "@douyinfe/semi-ui";
import {IconHome, IconPriceTag, IconStop, IconPlay, IconLink} from "@douyinfe/semi-icons";
import {columns,data} from './data';
import {useNavigate} from "react-router-dom";

const { Title,Paragraph, Text } = Typography;

const getTime = (s: boolean) => {
    return s ? Math.floor(new Date().getTime()/1000) : new Date().getTime();
}
const getData = (data: Date) => {
    return data.getFullYear()+'-'+(data.getMonth()+1)+'-'+data.getDate()+' '+data.getHours()+':'+data.getMinutes()+':'+data.getSeconds();
}

export const AlTimeStampConversion = () => {

    const navigate = useNavigate();
    const [value2,setValue2] = useState('s');
    const [ts,setTs] = useState(getTime(true));
    const [run,setRun] = useState(true);
    const [value1,setValue1] = useState(ts);
    const [date1,setDate1] = useState('');
    const [date2,setDate2] = useState('');
    const [value3,setValue3] = useState(getData(new Date()));
    const [value4,setValue4] = useState('s');
    const [validateStatus,setValidateStatus] = useState(true);

    const timmer = useRef<number>();

    useEffect(()=>{
        if (run){
            timmer.current = window.setInterval(()=>{
                setTs(getTime(value2 === 's'));
            },1000);
        }else {
            timmer.current = 0;
        }
        return ()=>{
            window.clearTimeout(timmer.current);
        }
    },[run,value2]);

    return(
        <div style={{margin: '20px 10px'}}>
            <Breadcrumb compact={false}>
                <Breadcrumb.Item href='/home' icon={<IconHome size="small" />}></Breadcrumb.Item>
                <Breadcrumb.Item onClick={()=>navigate('/home',{state:{type:'开发类'}})} icon={<IconPriceTag size="small" />}>开发类</Breadcrumb.Item>
                <Breadcrumb.Item>时间戳转换</Breadcrumb.Item>
            </Breadcrumb>
            <Title heading={2} style={{ margin: '8px 0' }} >时间戳转换</Title>
            <Space vertical align={'start'}>
                <Space>
                    <Text>现在:</Text>
                    <Text link={{onClick:()=>{setValue1(ts)}}}>{ts}</Text>
                    <Text>控制:</Text>
                    <Text type={run ? 'danger' : 'success'} icon={run ? <IconStop /> : <IconPlay />} onClick={()=>{setRun(!run)}}>{run ? '停止' : '运行'}</Text>
                </Space>
                <Space>
                    <Text>时间戳</Text>
                    <InputNumber value={value1} hideButtons onChange={(value)=>{if (typeof value === 'number')setValue1(value)}}></InputNumber>
                    <Select defaultValue='s' value={value2} onChange={(value)=>{if (typeof value === 'string') setValue2(value); setValue1(value1*1000);}}>
                        <Select.Option value='s'>秒(s)</Select.Option>
                        <Select.Option value='ms'>毫秒(ms)</Select.Option>
                    </Select>
                    <Button theme='light' type='tertiary' onClick={()=>{
                        let data;
                        if (value2 === 's'){
                            data = new Date(value1*1000);
                        }else{
                            data = new Date(value1);
                        }
                        let datastr = getData(data);
                        if (value2 === 'ms') datastr += '.' +data.getMilliseconds()
                        setDate1(datastr);
                    }}>转换{'>'}</Button>
                    <Text type={'success'} copyable>{date1}</Text>
                    {
                        //TODO 获取当前时区名称
                    }
                    <Text type={'quaternary'}>北京时间</Text>
                </Space>
                <Space>
                    <Text>时间</Text>
                    <Input style={{width:200}} validateStatus={validateStatus ? 'default':'error'} value={value3} onChange={(value)=>{setValue3(value)}}></Input>
                    <Text type={'quaternary'}>北京时间</Text>
                    <Button theme='light' type='tertiary' onClick={()=>{
                        if (!isNaN(Date.parse(value3))){
                            let data = new Date(value3);
                            if (value4 === 's'){
                                setDate2(Math.floor(data.getTime()/1000).toString());
                            }else {
                                setDate2(data.getTime().toString());
                            }
                            setValidateStatus(true);
                        }else{
                            setValidateStatus(false);
                        }

                    }}>转换{'>'}</Button>
                    <Text type={'success'} copyable>{date2}</Text>
                    <Select defaultValue='s' value={value4} onChange={(value)=>{if (typeof value === 'string') setValue4(value)}}>
                        <Select.Option value='s'>秒(s)</Select.Option>
                        <Select.Option value='ms'>毫秒(ms)</Select.Option>
                    </Select>
                </Space>
            </Space>
            <Title heading={4} style={{ margin: '8px 0' }} >时间戳</Title>
            <Paragraph>
                Unix 时间戳是从1970年1月1日（UTC/GMT的午夜）开始所经过的秒数，不考虑闰秒。
            </Paragraph>
            <Title heading={4} style={{ margin: '8px 0' }} >北京时间</Title>
            <Title heading={5} style={{ margin: '8px 0' }} >夏令时</Title>
            <Paragraph>
                1986年至1991年，中华人民共和国在全国范围实行了六年夏令时，每年从4月中旬的第一个星期日2时整(北京时间)到9月中旬第一个星期日的凌晨2时整(北京夏令时)。除1986年因是实行夏令时的第一年，从5月4日开始到9月14日结束外，其它年份均按规定的时段施行。夏令时实施期间，将时间向后调快一小时。1992年4月5日后不再实行。
            </Paragraph>
            <Title heading={5} style={{ margin: '8px 0' }} >JDK 不同版本的夏令时问题</Title>
            <Paragraph>
                夏令时的起止，是政令对日历描述的人为干预。每年均可能发生变化，JDK 如何感知这个规律并在系统上加以体现的？穷举所有变化，并配置在 JDK 中。详见：
                <Text link={{href:'https://www.oracle.com/java/technologies/tzdata-versions.html',target:'_blank'}} icon={<IconLink />} underline>
                    Timezone Data Versions in the JRE Software
                </Text>
            </Paragraph>
            <Paragraph>
                不同版本下 Asia/Shanghai 时区夏令时起始时间不同，早期维护者认为中国标准时间的夏令时切换发生在0时，而后来又经证明发生在2时，新版本 JDK 及时修正了这个问题。
            </Paragraph>
            <Title heading={4} style={{ margin: '8px 0' }} >获取当前时间戳</Title>
            <Table columns={columns} dataSource={data} pagination={false} />
        </div>
    );
}
import React, {useState} from "react";
import {Breadcrumb, Button, ButtonGroup, CheckboxGroup, Space, TextArea, Typography} from "@douyinfe/semi-ui";
import {IconHome, IconPriceTag} from "@douyinfe/semi-icons";
import {useNavigate} from "react-router-dom";
import {checkboxGroupOptions, commomData} from "./data";

const { Title,Paragraph, Text } = Typography;

export const AlRegularExpressionTool = () => {

    const navigate = useNavigate();
    //正则全局设置
    const [global,setGlobal] = useState([] as any[]);
    //正则表达式
    const [regular,setRegular] = useState('');
    //处理文本
    const [text,setText] = useState('');
    //结果
    const [result,setResult] = useState('');

    return(
      <div style={{margin: '20px 10px'}}>
          <Breadcrumb compact={false}>
              <Breadcrumb.Item href='/home' icon={<IconHome size="small" />}></Breadcrumb.Item>
              <Breadcrumb.Item onClick={()=>navigate('/home',{state:{type:'开发类'}})} icon={<IconPriceTag size="small" />}>开发类</Breadcrumb.Item>
              <Breadcrumb.Item>正则表达式工具</Breadcrumb.Item>
          </Breadcrumb>
          <Title heading={2} style={{ margin: '8px 0' }} >正则表达式工具</Title>
          <Space vertical style={{width:'100%'}} align={'start'}>
              <Title heading={6} style={{ margin: '8px 0' }} >常用正则：</Title>
              <ButtonGroup theme='borderless' type='secondary' size={'small'}>
                  {commomData.map((item => <Button onClick={()=>{
                      setRegular(item.dataRegex);
                  }}>{item.key}</Button>))}
              </ButtonGroup>
              <CheckboxGroup options={checkboxGroupOptions} direction='horizontal' value={global} onChange={(value)=>setGlobal(value)}/>
              <TextArea value={regular} onChange={(value) => setRegular(value)}/>
              <Space>
                  <Button>生成程序代码</Button>
                  <Button>分享正则</Button>
              </Space>
              <TextArea value={text} onChange={(value) => setText(value)}/>
              <Title heading={5} style={{ margin: '8px 0' }}>共找到 1 处匹配结果</Title>
              <TextArea value={result} onChange={(value) => setResult(value)}/>
          </Space>
      </div>
    )
}
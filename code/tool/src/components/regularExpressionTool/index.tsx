import React from "react";
import {Breadcrumb, Button, CheckboxGroup, Space, TextArea, Typography} from "@douyinfe/semi-ui";
import {IconHome, IconPriceTag} from "@douyinfe/semi-icons";
import {useNavigate} from "react-router-dom";
import {checkboxGroupOptions, commomData} from "./data";

const { Title,Paragraph, Text } = Typography;

export const AlRegularExpressionTool = () => {

    const navigate = useNavigate();

    return(
      <div style={{margin: '20px 10px'}}>
          <Breadcrumb compact={false}>
              <Breadcrumb.Item href='/home' icon={<IconHome size="small" />}></Breadcrumb.Item>
              <Breadcrumb.Item onClick={()=>navigate('/home',{state:{type:'开发类'}})} icon={<IconPriceTag size="small" />}>开发类</Breadcrumb.Item>
              <Breadcrumb.Item>正则表达式工具</Breadcrumb.Item>
          </Breadcrumb>
          <Title heading={2} style={{ margin: '8px 0' }} >正则表达式工具</Title>
          <Title heading={6} style={{ margin: '8px 0' }} >常用正则：</Title>
          <Space>
              {commomData.map((item => <Button theme='borderless' type='secondary' style={{ marginRight: 8 }}>{item.key}</Button>))}
          </Space>
          <CheckboxGroup options={checkboxGroupOptions} direction='horizontal' />
          <TextArea />
          <Space>
              <Button>生成程序代码</Button>
              <Button>分享正则</Button>
          </Space>
          <TextArea />
          <Title heading={4} style={{ margin: '8px 0' }}>共找到 1 处匹配结果</Title>
          <TextArea />
      </div>
    )
}
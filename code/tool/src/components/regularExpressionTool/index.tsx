import React, {useEffect, useState} from "react";
import {Breadcrumb, Button, ButtonGroup, CheckboxGroup, Space, TextArea, Typography} from "@douyinfe/semi-ui";
import {IconHome, IconPriceTag} from "@douyinfe/semi-icons";
import {useNavigate} from "react-router-dom";
import {checkboxGroupOptions, commomData, defaultText, defaultTmp} from "./data";
import {MyRegularCodemirror, MyTextCodemirror} from './codemirror'

const { Title } = Typography;

export const AlRegularExpressionTool = () => {

    const navigate = useNavigate();
    //正则全局设置
    const [global,setGlobal] = useState(['g'] as any[]);
    //正则表达式
    const [regular,setRegular] = useState('');
    //处理文本
    const [text,setText] = useState(defaultText);
    const [textTem,setTextTem] = useState(defaultText);
    //结果
    const [result,setResult] = useState('');

    useEffect(() => {
        //监听正则表达式变化
        if (regular){
            try {
                let reg = new RegExp(regular,global.join(''));
                let result = textTem.match(reg);
                if (result){
                    setResult(result.join('\n'));
                    setText(text+defaultTmp);
                }else{
                    setResult('');
                    setText(text+defaultTmp);
                }
            }catch (e){
                setResult('');
                setText(text+defaultTmp);
            }
        }
    },[regular,global])

    useEffect(()=>{
        //正常修改文本时text=textTem。如果不等表示需要高亮显示，回退text版本等于tmp
        if (text !== textTem){
            setText(textTem);
        }
    },[text])

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
              <MyRegularCodemirror text={regular} onChange={(value)=>{
                  setRegular(value);
              }}/>
              {/*<Space>*/}
              {/*    <Button onClick={()=>{}}>生成程序代码</Button>*/}
              {/*</Space>*/}
              <TextArea style={{display:'none'}} className={'myregularValue'} value={textTem} onChange={(value) => {
                  setTextTem(value);
              }} disabled/>
              <MyTextCodemirror text={text} onChange={(value:string) => {
                  //正常修改文本内容
                  setTextTem(value);
                  setText(value);
              }}/>
              <Title heading={5} style={{ margin: '8px 0' }}>共找到 {result ? result.split('\n').length : 0} 处匹配结果</Title>
              <TextArea className={'myResultValue'} value={result} onChange={(value) => setResult(value)} rows={10} readonly={true}/>
          </Space>
      </div>
    )
}
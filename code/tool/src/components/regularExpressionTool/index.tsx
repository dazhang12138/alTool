import React, {useEffect, useState} from "react";
import {Breadcrumb, Button, ButtonGroup, CheckboxGroup, Space, TextArea, Typography} from "@douyinfe/semi-ui";
import {IconHome, IconPriceTag} from "@douyinfe/semi-icons";
import {useNavigate} from "react-router-dom";
import {checkboxGroupOptions, commomData, defaultText} from "./data";
import {UnControlled as CodeMirror} from "react-codemirror2";
import 'codemirror/lib/codemirror'
import 'codemirror/lib/codemirror.css'
// 主题风格
import 'codemirror/theme/material.css';
import 'codemirror/theme/base16-light.css'
import 'codemirror/theme/base16-dark.css'
// 设置代码语言模式（比如JS，SQL，python，java等）
import 'codemirror/mode/markdown/markdown';
//代码高亮
import 'codemirror/addon/selection/active-line';

const { Title,Paragraph, Text } = Typography;

export const AlRegularExpressionTool = () => {

    const navigate = useNavigate();
    //正则全局设置
    const [global,setGlobal] = useState(['g'] as any[]);
    //正则表达式
    const [regular,setRegular] = useState('');
    //处理文本
    const [text,setText] = useState(defaultText);
    //结果
    const [result,setResult] = useState('');

    useEffect(() => {
        //监听正则表达式变化
        if (regular){
            try {
                let reg = new RegExp(regular,global.join(''));
                let result = text.match(reg);
                if (result){
                    setResult(result.join('\n'));
                    //动态css
                    let mytext = document.getElementsByClassName('mytext');
                    console.log('mytext:',mytext);
                }else{
                    setResult('');
                }
            }catch (e){
                setResult('');
            }
        }
    },[regular,global])

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
              {/*<TextArea value={regular} onChange={(value) => setRegular(value)}/>*/}
              <CodeMirror
                  className={'myregular'}
                  editorDidMount={(editor)=>{
                      editor.setSize(1250,100);
                  }}
                  onChange={(editor,data,value)=>setRegular(value)}
                  value={regular}
                  options={{
                      mode: 'markdown', //定义mode
                      theme: 'base16-light', //选中的theme
                      lineNumbers: true, //显示行号
                      lineWrapping:true, //字段换行
                      matchBrackets:true,//括号匹配
                  }}
              />
              <Space>
                  <Button>生成程序代码</Button>
                  <Button>分享正则</Button>
              </Space>
              {/*<TextArea*/}
              {/*    value={text}*/}
              {/*    onChange={(value) => setText(value)}*/}
              {/*    rows={10}*/}
              {/*    showClear={true}/>*/}
              <CodeMirror
                  className={'mytext'}
                  editorDidMount={(editor)=>{
                      editor.setSize(1250,500);
                  }}
                  value={text}
                  options={{
                      mode: 'markdown', //定义mode
                      theme: 'base16-light', //选中的theme
                      lineNumbers: true, //显示行号
                      lineWrapping:true, //字段换行
                  }}
              />
              <Title heading={5} style={{ margin: '8px 0' }}>共找到 {result ? result.split('\n').length : 0} 处匹配结果</Title>
              <TextArea value={result} onChange={(value) => setResult(value)} rows={10} readonly={true}/>
          </Space>
      </div>
    )
}
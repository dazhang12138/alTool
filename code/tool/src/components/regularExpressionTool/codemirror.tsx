import {Controlled as ReactCodeMirror} from "react-codemirror2";
import React, {FC} from "react";
import './index.css'
import 'codemirror/lib/codemirror'
import 'codemirror/lib/codemirror.css'
// 主题风格
import 'codemirror/theme/idea.css';
// 设置代码语言模式（比如JS，SQL，python，java等）
import 'codemirror/mode/markdown/markdown';
//代码高亮
import 'codemirror/addon/selection/active-line';

const myStyle = ['begin-style','end-style'];

type MyProps = {
    text:string,
    onChange:(value:string)=>void
}

export const MyTextCodemirror:FC<MyProps> = (props) => {

    const {onChange,text} = props;
    return (
        <ReactCodeMirror
            className={'mytext'}
            editorDidMount={(editor)=>{
                editor.setSize(1250,500);
            }}
            value={text}
            options={{
                mode: 'myreg', //定义mode
                theme: 'idea', //选中的theme
                lineNumbers: true, //显示行号
                lineWrapping:true, //字段换行
            }}
            onBeforeChange={(editor,data,value) => {
                onChange(value);
            }}
            defineMode={{
                name: 'myreg',
                fn: () => ({
                    token: (stream: any, state: any) => {
                        const cmCustomCheckStreamFn = (streamWrapper: string) => {
                            // 自定义关键字和样式
                            const customKeyWords = [];
                            let myResultValue = document.getElementsByClassName('myResultValue');
                            if (myResultValue.length > 0){
                                let value = myResultValue[0].textContent;
                                if (value){
                                    let valuelen = value.split('\n');
                                    for (let i in valuelen) {
                                        let a = valuelen[i];
                                        // @ts-ignore
                                        let b = myStyle[i % 2];
                                        customKeyWords.push([
                                            a, b
                                        ])
                                    }
                                }
                            }
                            for (let i = 0; i < customKeyWords.length; i++) {
                                if (streamWrapper.match(customKeyWords[i][0])) {
                                    return customKeyWords[i][1];
                                }
                            }
                            return '';
                        };

                        const ret = cmCustomCheckStreamFn(stream);
                        if (ret.length > 0) return ret;

                        stream.next();
                        return null;
                    }
                })
            }}
        />
    )
}

export const MyRegularCodemirror:FC<MyProps> = (props)=>{

    const {onChange,text} = props;
    return (<ReactCodeMirror
        className={'myregular'}
        editorDidMount={(editor)=>{
            editor.setSize(1250,100);
        }}
        value={text}
        options={{
            mode: 'markdown', //定义mode
            theme: 'idea', //选中的theme
            lineNumbers: true, //显示行号
            lineWrapping:true, //字段换行
            matchBrackets:true,//括号匹配
        }}
        onBeforeChange={(editor, data, newValue) => {
            onChange(newValue);
        }}
    />)
}
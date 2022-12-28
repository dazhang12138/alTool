import React, {FC, useState} from 'react';
import {ConfigProvider, Button, Modal, Tabs, TabPane, Icon, TextArea,Typography} from '@douyinfe/semi-ui';
import en_GB from '@douyinfe/semi-ui/lib/es/locale/source/en_GB';
import {JsIco,PhpIco,GoIco,RubyIco,PythonIco,JavaIco,ObjectiveCIco,DartIco} from './ico';
import {defaultCode} from './data';
const {Paragraph,Text} = Typography;

type CodeModalProps = {
    regular:string,
    global:string
}
export const CodeModal:FC<CodeModalProps> = (props) => {
    const [modal, contextHolder] = Modal.useModal();
    const {regular,global} = props;
    const regularCode = defaultCode(regular,global);

    const getCode = (activeKey:string)=>{
        // @ts-ignore
        return regularCode[activeKey];
    }

    const config = {
        hasCancel:false,
        okText:'关闭',
        width:'920px',
        title: '程序代码',
        content: <div><Tabs
            defaultActiveKey={'1'}
        >
            <TabPane
                tab={<span><Icon svg={<JsIco/>}/>JS</span>}
                itemKey='1'
            >
                <TextArea disabled readonly placeholder={regularCode['1']}/>
                <Paragraph copyable={{content:getCode('1'),successTip:<Text type="success">复制成功</Text>}}>点击复制</Paragraph>
            </TabPane>
            <TabPane
                tab={<span><Icon svg={<PhpIco/>}/>PHP</span>}
                itemKey='2'
            >
                <TextArea disabled readonly placeholder={regularCode['2']}/>
                <Paragraph copyable={{content:getCode('2'),successTip:<Text type="success">复制成功</Text>}}>点击复制</Paragraph>
            </TabPane>
            <TabPane
                tab={<span><Icon svg={<GoIco/>}/>GO</span>}
                itemKey='3'
            >
                <TextArea disabled readonly placeholder={regularCode['3']}/>
                <Paragraph copyable={{content:getCode('3'),successTip:<Text type="success">复制成功</Text>}}>点击复制</Paragraph>
            </TabPane>
            <TabPane
                tab={<span><Icon svg={<RubyIco/>}/>Ruby</span>}
                itemKey='4'
            >
                <TextArea disabled readonly placeholder={regularCode['4']}/>
                <Paragraph copyable={{content:getCode('4'),successTip:<Text type="success">复制成功</Text>}}>点击复制</Paragraph>
            </TabPane>
            <TabPane
                tab={<span><Icon svg={<PythonIco/>}/>Python2</span>}
                itemKey='5'
            >
                <TextArea disabled readonly placeholder={regularCode['5']}/>
                <Paragraph copyable={{content:getCode('5'),successTip:<Text type="success">复制成功</Text>}}>点击复制</Paragraph>
            </TabPane>
            <TabPane
                tab={<span><Icon svg={<PythonIco/>}/>Python3</span>}
                itemKey='6'
            >
                <TextArea disabled readonly placeholder={regularCode['6']}/>
                <Paragraph copyable={{content:getCode('6'),successTip:<Text type="success">复制成功</Text>}}>点击复制</Paragraph>
            </TabPane>
            <TabPane
                tab={<span><Icon svg={<JavaIco/>}/>Java</span>}
                itemKey='7'
            >
                <TextArea disabled readonly placeholder={regularCode['7']}/>
                <Paragraph copyable={{content:getCode('7'),successTip:<Text type="success">复制成功</Text>}}>点击复制</Paragraph>
            </TabPane>
            <TabPane
                tab={<span><Icon svg={<ObjectiveCIco/>}/>Objc</span>}
                itemKey='8'
            >
                <TextArea disabled readonly placeholder={regularCode['8']}/>
                <Paragraph copyable={{content:getCode('8'),successTip:<Text type="success">复制成功</Text>}}>点击复制</Paragraph>
            </TabPane>
            <TabPane
                tab={<span><Icon svg={<DartIco/>}/>Dart</span>}
                itemKey='9'
            >
                <TextArea disabled readonly placeholder={regularCode['9']}/>
                <Paragraph copyable={{content:getCode('9'),successTip:<Text type="success">复制成功</Text>}}>点击复制</Paragraph>
            </TabPane>
        </Tabs></div>
    };

    return (
        <ConfigProvider locale={en_GB}>
            <div>
                <Button
                    onClick={() => {
                        modal.info(config);
                    }}
                >
                    生成程序代码
                </Button>
            </div>
            {contextHolder}
        </ConfigProvider>
    );
}

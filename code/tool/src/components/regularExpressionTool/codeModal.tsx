import React, {FC, useState} from 'react';
import {ConfigProvider, Button, Modal, Tabs, TabPane, Icon, TextArea,Typography} from '@douyinfe/semi-ui';
import en_GB from '@douyinfe/semi-ui/lib/es/locale/source/en_GB';
import {JsIco,PhpIco,GoIco} from './ico';
const {Paragraph,Text} = Typography;
import {defaultCode} from './data';

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

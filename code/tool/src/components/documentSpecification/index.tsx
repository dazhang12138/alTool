import {Breadcrumb, Table, TabPane, Tabs, Typography} from "@douyinfe/semi-ui";
import {IconHome, IconPriceTag} from "@douyinfe/semi-icons";
import React from "react";
import {useNavigate} from "react-router-dom";
import {tabPaneData,data,color} from './data';
import './index.css'
const { Title } = Typography;

const columns = [
    {
        title: '证件照',
        dataIndex: 'name',
    },
    {
        title: '尺寸',
        dataIndex: 'size',
    },
    {
        title: '背景颜色',
        dataIndex: 'color',
        render: (text:[]) => {
            return (
                <div>
                    {text.map(value => {
                        return(<span className={'color-block'} style={color[value]}></span>)
                    })}
                </div>
            );
        },
    },
    {
        title: '文件大小',
        dataIndex: 'file',
    }
];

export const DocumentSpecification = () => {

    const navigate = useNavigate();

    const handleRow = (record: any, index: number) => {
        // 给偶数行设置斑马纹
        if (index % 2 === 0) {
            return {
                style: {
                    background: 'var(--semi-color-fill-0)',
                },
            };
        } else {
            return {};
        }
    };

    return(<div style={{margin: '20px 10px'}}>
        <Breadcrumb compact={false}>
            <Breadcrumb.Item href='/home' icon={<IconHome size="small" />}></Breadcrumb.Item>
            <Breadcrumb.Item onClick={()=>navigate('/home',{state:{type:'图像类'}})} icon={<IconPriceTag size="small" />}>图像类</Breadcrumb.Item>
            <Breadcrumb.Item>图片规格</Breadcrumb.Item>
        </Breadcrumb>
        <Title heading={2} style={{ margin: '8px 0' }} >证件照规格要求</Title>

        <Tabs type={'button'}>
            {tabPaneData.map((value) => {
                return (<TabPane tab={value.value} itemKey={value.key}>
                    {
                        // @ts-ignore
                        <Table columns={columns} dataSource={data[value.key]} pagination={false} onRow={handleRow}/>
                    }
                </TabPane>)
            })}
        </Tabs>
    </div>)
}
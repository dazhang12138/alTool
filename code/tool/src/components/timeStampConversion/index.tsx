import React from "react";
import {Breadcrumb, Typography} from "@douyinfe/semi-ui";
import {IconHome, IconPriceTag} from "@douyinfe/semi-icons";

const { Title,Paragraph } = Typography;

export const AlTimeStampConversion = () => {
    return(
        <div style={{margin: '20px 10px'}}>
            <Breadcrumb compact={false}>
                <Breadcrumb.Item icon={<IconHome size="small" />}></Breadcrumb.Item>
                <Breadcrumb.Item icon={<IconPriceTag size="small" />}>开发类</Breadcrumb.Item>
                <Breadcrumb.Item>时间戳转换</Breadcrumb.Item>
            </Breadcrumb>

            <Title heading={2} style={{ margin: '8px 0' }} >时间戳转换</Title>
        </div>
    );
}
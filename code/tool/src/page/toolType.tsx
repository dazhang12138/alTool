import {FC, useEffect, useState} from "react";
import {TabPane, Tabs} from "@douyinfe/semi-ui";
import {IToolType, ToolTypeApiDefinition} from '@al-tool/domain'
import {get} from '../service'
import Tool from "./tool";

const ToolType:FC = (props) => {

    const [data,setData] = useState([] as IToolType[]);

    useEffect(()=>{
        get(ToolTypeApiDefinition.queryRefer.client(),null,(data)=>{
            setData(data.data);
        })
    },[]);


    return(
        <Tabs type="button" defaultActiveKey='allToolType'>
            <TabPane tab='all' itemKey='allToolType'>
                <Tool typeid={undefined}/>
            </TabPane>
            {data && data.map(item => {
                return <TabPane tab={item.name} itemKey={item.id}>
                    <Tool typeid={item.id}/>
                </TabPane>
            })}
        </Tabs>
    );
}

export default ToolType;
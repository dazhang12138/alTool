import {FC, useEffect, useState} from "react";
import {TabPane, Tabs} from "@douyinfe/semi-ui";
import {IToolType, ToolTypeApiDefinition} from '@al-tool/domain'
import {get} from '../service'

type ToolTypeProps = {
    onChange: (activeKey: string) => void;
}

const ToolType:FC<ToolTypeProps> = (props) => {

    const {onChange} = props;
    const [data,setData] = useState([] as IToolType[]);

    useEffect(()=>{
        get(ToolTypeApiDefinition.queryRefer.client(),null,(data)=>{
            setData(data.data);
        })
    },[]);


    return(
        <Tabs
            type="button"
            defaultActiveKey='allToolType'
            onChange={onChange}
        >
            <TabPane tab='全部' itemKey='allToolType' />
            {data && data.map(item => {
                return <TabPane tab={item.name} itemKey={item.id} />
            })}
        </Tabs>
    );
}

export default ToolType;
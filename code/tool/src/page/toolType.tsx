import {FC, useEffect, useState} from "react";
import {TabPane, Tabs} from "@douyinfe/semi-ui";
import {IToolType, ToolTypeApiDefinition} from '@al-tool/domain'
import {get} from '../service'

type ToolTypeProps = {
    onChange: (activeKey: string) => void;
    type: string;
}

const ToolType:FC<ToolTypeProps> = (props) => {

    const {onChange} = props;
    const [data,setData] = useState([] as IToolType[]);
    const [type,setType] = useState('allToolType');

    useEffect(()=>{
        get(ToolTypeApiDefinition.queryRefer.client(),null,(data)=>{
            setData(data.data);
            data.filter(item -> item.name === props.type);
        })
    },[]);


    return(
        <Tabs
            type="button"
            defaultActiveKey={type}
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
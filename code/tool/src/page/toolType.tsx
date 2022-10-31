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
            let defaultType = data.data && data.data.filter((item:IToolType) => item.name === props.type)
            defaultType = defaultType && defaultType.length > 0 && defaultType[0];
            if (defaultType && defaultType.id){
                setType(defaultType.id);
                onChange(defaultType.id);
            }
        })
    },[]);


    return(
        <Tabs
            type="button"
            activeKey={type}
            defaultActiveKey={type}
            onChange={(activeKey)=>{
                onChange(activeKey);
                setType(activeKey);
            }}
        >
            <TabPane tab='全部' itemKey='allToolType' />
            {data && data.map(item => {
                return <TabPane tab={item.name} itemKey={item.id} />
            })}
        </Tabs>
    );
}

export default ToolType;
import {FC, useEffect, useState} from "react";
import {Card, CardGroup, Empty} from "@douyinfe/semi-ui";
import { IllustrationNoResult, IllustrationNoResultDark } from '@douyinfe/semi-illustrations';
import {FileApiDefinition, ITool, ToolApiDefinition} from "@al-tool/domain";
import {get} from "../service";

type ToolProps = {
    typeid: string | undefined;
}

const empty = (
    <Empty
        image={<IllustrationNoResult style={{ width: 150, height: 150 }} />}
        darkModeImage={<IllustrationNoResultDark style={{ width: 150, height: 150 }} />}
        description="搜索无结果"
    />
);

const Tool:FC<ToolProps> = (props) => {

    const {typeid} = props;

    const [data,setData] = useState([] as ITool[]);

    useEffect(()=>{
        get(ToolApiDefinition.queryType.client(),{id:typeid},(data) => {
            setData(data);
        });
    },[])

    return(
        <CardGroup spacing={15}>
            {data ? data.map(item => {
                return (<Card
                    key={item.id}
                    shadows='always'
                    title={item.title}
                    style={{ width:400 }}
                    cover={
                        <img alt={item.code} src={FileApiDefinition.downloadICO.client() + '?id=' + item.img}/>
                    }
                >
                </Card>)
            }) : empty}
        </CardGroup>
    );
}
export default Tool;
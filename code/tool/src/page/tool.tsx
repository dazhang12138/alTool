import {FC, useEffect, useState} from "react";
import {Avatar, Card, CardGroup, Empty, Typography} from "@douyinfe/semi-ui";
import {IllustrationNoResult, IllustrationNoResultDark} from '@douyinfe/semi-illustrations';
import {FileApiDefinition, IToolQuery, ToolApiDefinition} from "@al-tool/domain";
import {get} from "../service";

type ToolProps = {
    typeid: string | undefined;
}

const {Meta} = Card;
const {Text} = Typography;

const empty = (
    <Empty
        image={<IllustrationNoResult style={{ width: 150, height: 150 }} />}
        darkModeImage={<IllustrationNoResultDark style={{ width: 150, height: 150 }} />}
        description="搜索无结果"
    />
);

const Tool:FC<ToolProps> = (props) => {

    const {typeid} = props;

    const [data,setData] = useState([] as IToolQuery[]);

    useEffect(()=>{
        get(ToolApiDefinition.queryType.client(),{id:typeid},(data) => {
            setData(data);
        });
    },[typeid])

    return(
        data.length > 0 ? <CardGroup spacing={15}>
            {data.map(item => {
                    return (<Card
                        key={item.id}
                        shadows='always'
                        title={<Meta
                            title={item.title}
                            description={item.toolTypeName}
                            avatar={
                                <Avatar
                                    alt='Card meta img'
                                    size="default"
                                    src={'http://127.0.0.1:3000'+FileApiDefinition.downloadICO.client() + '?id=' + item.img}
                                />
                            }
                        />}
                        headerExtraContent={
                            <Text link={{href:item.url}}>
                                进入
                            </Text>
                        }
                        style={{ width:300 }}
                    >
                        {item.memo}
                    </Card>)
            })}</CardGroup>
            : empty
    );
}
export default Tool;
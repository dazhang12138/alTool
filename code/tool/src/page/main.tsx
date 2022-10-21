import React, {useState} from 'react';
import ToolType from "./toolType";
import {Layout} from "@douyinfe/semi-ui";
import Tool from "./tool";
import {Link} from "react-router-dom";

const { Header, Footer, Content } = Layout;

const App = () => {

    const [id,setId] = useState('');

    return (
        <Layout className="components-layout-demo">
            <Header>
                <ToolType onChange={(activeKey)=>{
                    if (activeKey === 'allToolType'){
                        setId('');
                    }else{
                        setId(activeKey);
                    }
                }}/>
            </Header>
            <Content>
                <Tool typeid={id} />
            </Content>
            <Footer>
                <Link to='/BinHexOct'>计算</Link>
            </Footer>
        </Layout>
    );
}

export default App;

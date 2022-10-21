import React, {useState} from 'react';
import ToolType from "./page/toolType";
import {Layout} from "@douyinfe/semi-ui";
import Tool from "./page/tool";

const { Header, Footer, Content } = Layout;

function App() {

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
          <Footer>Footer</Footer>
      </Layout>
    );
}

export default App;

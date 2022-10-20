import React from 'react';
import ToolType from "./page/toolType";
import {Layout} from "@douyinfe/semi-ui";

const { Header, Footer, Content } = Layout;

function App() {
  return (
      <Layout className="components-layout-demo">
          <Header>
              <ToolType/>
          </Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
      </Layout>
  );
}

export default App;

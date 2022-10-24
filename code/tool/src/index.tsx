import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {routers} from "./router";
import {Layout} from "@douyinfe/semi-ui";
import React from "react";

const { Header, Footer, Content } = Layout;

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
    <Layout style={{marginLeft:'25%',marginRight:'25%',float:'left'}}>
        <Header>
            头部内容
        </Header>
        <Content>
            <RouterProvider router={createBrowserRouter(routers)}/>
        </Content>
        <Footer>
            尾部内容
        </Footer>
    </Layout>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

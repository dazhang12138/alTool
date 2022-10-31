import React, {useState} from 'react';
import ToolType from "./toolType";
import Tool from "./tool";
import {useLocation} from "react-router-dom";

const App = () => {

    const [id,setId] = useState('');
    const location = useLocation();

    return (
        <>
            <ToolType onChange={(activeKey)=>{
                if (activeKey === 'allToolType'){
                    setId('');
                }else{
                    setId(activeKey);
                }
            }} type={location.state.type ? location.state.type : 'allToolType'}/>
            <Tool typeid={id} type={location.state.type}/>
        </>
    );
}

export default App;

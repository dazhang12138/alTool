import React, {useState} from 'react';
import ToolType from "./toolType";
import Tool from "./tool";

const App = () => {

    const [id,setId] = useState('');

    return (
        <>
            <ToolType onChange={(activeKey)=>{
                if (activeKey === 'allToolType'){
                    setId('');
                }else{
                    setId(activeKey);
                }
            }}/>
            <Tool typeid={id} />
        </>
    );
}

export default App;

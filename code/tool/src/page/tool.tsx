import {FC} from "react";

type ToolProps = {
    typeid: string | undefined;
}

const Tool:FC<ToolProps> = (props) => {

    const {typeid} = props;

    return(
        <span>{typeid}</span>
    );
}
export default Tool;
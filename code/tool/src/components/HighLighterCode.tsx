import {Prism} from "react-syntax-highlighter";
import {prism} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {FC} from "react";

type CodeProps = {
    lang: string;
    children:string;
}

type HighLighterProps = {
    lang: string;
    children:string | string[];
}

const Code:FC<CodeProps> = (props) => {
    return(
        <Prism
            showLineNumbers={true}
            startingLineNumber={0}
            language={props.lang}
            style={prism}
            lineNumberStyle={{color: '#ddd', fontSize: 20}}
            wrapLines={true}
        >
            {props.children.replace(/^\s+|\s+$/g, '')}
        </Prism>
    )
}

export const HighLighter:FC<HighLighterProps> = (props) => {
    return (
        <div>
            {typeof props.children === 'string' && <Code lang={props.lang}>{props.children}</Code>}
            {props.children instanceof Array  && props.children.map((item) => {
               return <Code lang={props.lang}>{item}</Code>
            })}
        </div>
)
}

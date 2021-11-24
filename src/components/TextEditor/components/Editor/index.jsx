import {useCallback, Fragment} from "react";
import { Editable } from "slate-react";

import Leaf from "./components/Leaf";
import CodeElement from "../../../../common/components/Node/CodeElement";
import DefaultElement from "../../../../common/components/Node/DefaultElement";

const Editor = (props) => {

    const renderElement = useCallback((props) => {
        switch (props.element.type) {
            case "code":
                return <CodeElement {...props} />;
            default:
                return <DefaultElement {...props} />;
        }
    }, []);

    const renderLeaf = useCallback((props) => {
        return <Leaf {...props} />;
    }, []);

    return (
        <Fragment>
            <Editable renderElement={renderElement} renderLeaf={renderLeaf} placeholder="输入内容" />
        </Fragment>
    );
};

export default Editor;

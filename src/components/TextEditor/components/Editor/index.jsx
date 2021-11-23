import {useState, useCallback} from "react";
import {Slate, Editable} from "slate-react";

import styles from "./index.module.scss";

import Leaf from "./components/Leaf";
import CodeElement from "../../../../common/components/Node/CodeElement";
import DefaultElement from "../../../../common/components/Node/DefaultElement";

const Editor = (props) => {

    // 文档内容
    const [value, setValue] = useState([
        {
            type: "paragraph",
            children: [{text: ""}],
        },
    ]);

    const handleChange = (value) => {
        console.log(props.editor.section)
        setValue(value);
    };

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
        <div className={styles.editor}>
            <Slate editor={props.editor} value={value} onChange={handleChange}>
                <Editable renderElement={renderElement} renderLeaf={renderLeaf} placeholder="输入内容" />
            </Slate>
        </div>
    );
};

export default Editor;

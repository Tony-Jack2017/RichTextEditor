import React, {useState, useCallback, useMemo} from "react";
import styles from "./index.module.scss";
import {createEditor} from "slate"
import {Slate, withReact} from "slate-react";

//
import MenuTab from "./components/MenuTab"
import Editor from "./components/Editor";

const TextEditor = (props) => {

    const editor = useMemo(() => withReact(createEditor()), [])
    const [value, setValue] = useState([{type: "paragraph", children: [{text: ""}]}])

    return (
        <div className={styles["editor"]}>
            <Slate editor={editor} value={value} onChange={(value) => {setValue(value)}}>
                <div className={styles["editor-tab"]}>
                    <MenuTab />
                </div>
                <div className={styles["editor-body"]}>
                    <Editor />
                </div>
            </Slate>

        </div>
    );
};

export default TextEditor;

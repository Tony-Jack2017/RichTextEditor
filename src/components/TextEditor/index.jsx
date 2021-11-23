import React, {Fragment} from "react";
import styles from "./index.module.scss";

import Editor from "./components/Editor";
import MenuTab from "./components/MenuTab"

const TextEditor = (props) => {
    return (
        <Fragment>
            <div className={styles["editor-tab"]}>
                <MenuTab editor={props.editor}/>
            </div>
            <div className={styles["editor-body"]}>
                <Editor editor={props.editor}/>
            </div>
        </Fragment>
    );
};

export default TextEditor;

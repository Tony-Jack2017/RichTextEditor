import React, { Fragment } from "react";
import styles from "./index.module.scss";

import Editor from "../Editor";
import MenuTab from "../MenuTab"

const TextEditor = (props) => {
  return (
    <Fragment>
      <div className={styles["editor-tab"]}>
        <MenuTab editor={props.editor} />
      </div>
      <div className={styles["editor-body"]}>
        <Editor editor={props.editor} />
      </div>
    </Fragment>
  );
};

export default TextEditor;

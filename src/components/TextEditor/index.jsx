import React, { Fragment } from "react";
import Editor from "../Editor";
import styles from "./index.module.scss";

const TextEditor = () => {
  return (
    <Fragment>
      <div className={styles["editor-tab"]}>
        
      </div>
      <div className={styles["editor-body"]}>
        <Editor />
      </div>
    </Fragment>
  );
};

export default TextEditor;

import {Fragment} from "react";
import styles from "./index.module.scss";

import MarkButton from "./components/MarkButton";
import BlockButton from "./components/BlockButton";
import InlineButton from "./components/InlineButton";

const MenuTab = () => {
  return (
    <Fragment>
      <ul className={styles.menu}>
        <li>
          <MarkButton format={"bold"}/>
        </li>
        <li>
          <MarkButton format={"italic"}/>
        </li>
        <li>
          <MarkButton format={"underline"}/>
        </li>
        <li>
          <InlineButton format={"link"}/>
        </li>
        <li>
          <BlockButton format={"code"}/>
        </li>
        <li>
          <BlockButton format={"dice-one"}/>
        </li>
        <li>
          <BlockButton format={"dice-two"}/>
        </li>
        <li>
          <BlockButton format={"list-ol"}/>
        </li>
        <li>
          <BlockButton format={"list-ul"}/>
        </li>
      </ul>
    </Fragment>
  );
};

export default MenuTab;

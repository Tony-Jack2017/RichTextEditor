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
          <MarkButton format={"bold"} />
        </li>
        <li>
          <MarkButton format={"italic"} />
        </li>
        <li>
          <MarkButton format={"underline"} />
        </li>
        <li>
          <InlineButton format={"link"} />
        </li>
        <li>
          <BlockButton format={"code"} />
        </li>
      </ul>
    </Fragment>
  );
};

export default MenuTab;

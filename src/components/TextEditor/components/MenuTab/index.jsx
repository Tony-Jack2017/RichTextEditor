import {Fragment} from "react";
import styles from "./index.module.scss";

import Button from "./components/Button";

const MenuTab = () => {
  return (
    <Fragment>
      <ul className={styles.menu}>
        <li>
          <Button format={"bold"}></Button>
        </li>
        {/*<li>*/}
        {/*  <Button format={"code"}></Button>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <Button format={"italic"}></Button>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <Button format={"underline"}></Button>*/}
        {/*</li>*/}
      </ul>
    </Fragment>
  );
};

export default MenuTab;

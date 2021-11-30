import {Fragment} from "react";
import styles from "./index.module.scss";

import Button from "./components/Button";

const MenuTab = () => {
  return (
    <Fragment>
      <ul className={styles.menu}>
        <li>
          <Button format={"bold"} />
        </li>
        <li>
          <Button format={"code"} />
        </li>
        <li>
          <Button format={"italic"} />
        </li>
        <li>
          <Button format={"underline"} />
        </li>
        <li>
          <Button format={"link"} />
        </li>
      </ul>
    </Fragment>
  );
};

export default MenuTab;

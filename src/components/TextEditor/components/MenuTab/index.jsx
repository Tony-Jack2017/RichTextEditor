import {Fragment} from "react";
import styles from "./index.module.scss";

import Button from "./components/Button";

const MenuTab = () => {

    return (
        <Fragment>
            <ul className={styles.menu}>
                <li>
                    <Button format={"blod"}>
                        B
                    </Button>
                </li>
                <li>
                    <Button format={"code"}>
                        code
                    </Button>
                </li>
            </ul>
        </Fragment>
    );
};

export default MenuTab;

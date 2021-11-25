import {Fragment} from "react";
import styles from "./index.module.scss";

import Button from "./components/Button";
import Icon from "../../../../common/components/Icon";

const MenuTab = () => {

    return (
        <Fragment>
            <ul className={styles.menu}>
                <li>
                    <Button format={"bold"}>
                        <Icon icon={"bold"}/>
                    </Button>
                </li>
                <li>
                    <Button format={"code"}>
                        <Icon icon={"code"}/>
                    </Button>
                </li>
                <li>
                    <Button format={"italic"}>
                        <Icon icon={"italic"}/>
                    </Button>
                </li>
                <li>
                    <Button format={"underline"}>
                        <Icon icon={"underline"}/>
                    </Button>
                </li>
            </ul>
        </Fragment>
    );
};

export default MenuTab;

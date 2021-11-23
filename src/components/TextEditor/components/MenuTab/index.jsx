import {Fragment} from "react";
import styles from "./index.module.scss";

import CustomCommand from "../../../../common/command";

const MenuTab = (props) => {
    return (
        <Fragment>
            <ul className={styles.menu}>
                <li>
                    <button
                        onMouseDown={(event) => {
                            event.preventDefault();
                            CustomCommand.toggleBoldMark(props.editor);
                        }}
                    >
                        B
                    </button>
                </li>
                <li>
                    <button
                        onMouseDown={(event) => {
                            event.preventDefault();
                            CustomCommand.toggleCodeBlock(props.editor);
                        }}
                    >
                        code
                    </button>
                </li>
            </ul>
        </Fragment>
    );
};

export default MenuTab;

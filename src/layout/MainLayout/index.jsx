import {useMemo} from "react"
import TextEditor from "../../components/TextEditor";
import Tools from "../../components/Tools";
import styles from "./index.module.scss"

import {withReact} from 'slate-react'
import {createEditor} from 'slate'

const MainLayout = () => {

    const editor = useMemo(() => withReact(createEditor()), [])

    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <TextEditor editor={editor}/>
            </div>
            <div className={styles.tools}>
                <Tools editor={editor}/>
            </div>
        </div>
    );
};

export default MainLayout;

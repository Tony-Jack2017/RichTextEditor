import {Fragment} from "react"
import styles from "./index.module.scss"

const Tools = (props) => {
    return (
        <Fragment>
            <div className={styles.font}>
                <p>元素类型</p>
                <div className={styles.list}>
                    <div className={styles.item}>容器元素</div>
                    <div className={styles.item}>代码片段</div>
                    <div className={styles.item}>图片</div>
                </div>
            </div>
        </Fragment>
    )
}

export default Tools
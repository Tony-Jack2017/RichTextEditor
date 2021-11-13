
import { Fragment } from "react"
import styles from "./index.module.scss"

const Tools = () => {
  return (
    
    <Fragment>
      <div className={styles.font}>
        <p>文本字体设置</p>
        <div className={styles.list}>
          <div className={styles.item}>加粗</div>
          <div className={styles.item}>斜体</div>
          <div className={styles.item}>删除线</div>
          <div className={styles.item}>下滑线</div>
        </div>
      </div>
    </Fragment>

  )
}

export default Tools
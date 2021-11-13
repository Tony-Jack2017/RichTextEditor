
import styles from './index.module.scss'

const FollowArticle = () => {
    return (
        <div className={styles['follow-article']}>
            <div className={styles.left}>
                这里是操作的区域
            </div>
            <div className={styles.right}>
                这是展示区域
            </div>
        </div>
    )
}

export default FollowArticle
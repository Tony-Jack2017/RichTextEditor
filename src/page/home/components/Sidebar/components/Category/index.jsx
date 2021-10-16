import styles from './index.module.scss'
import interest_icon from '../../../../../../asset/mock/interest_icon.png'

const Category = () => {
    return (
        <div className={styles['tag-list']}>
            <div className={styles.tag}>
                <div className={styles.icon}>
                    <img src={interest_icon}/>
                </div>
                <div>JavaScript</div>
            </div>
            <div className={styles.tag}>
                <div className={styles.icon}>
                    <img src={interest_icon}/>
                </div>
                <div>
                    TypeScript
                </div>
            </div>
            <div className={styles.tag}>
                <div className={styles.icon}>
                    <img src={interest_icon}/>
                </div>
                <div>Es6</div>
            </div>
            <div className={styles.tag}>
                <div className={styles.icon}>
                    <img src={interest_icon}/>
                </div>
                <div>go</div>
            </div>
            <div className={styles.tag}>
                <div className={styles.icon}>
                    <img src={interest_icon}/>
                </div>
                <div>React</div>
            </div>
        </div>
    )
}

export default Category
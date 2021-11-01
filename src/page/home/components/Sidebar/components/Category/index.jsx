import styles from './index.module.scss'
import interest_icon from '../../../../../../asset/mock/interest_icon.png'

const Category = () => {
    return (
        <div className={styles['tag-list']}>
            <div className={styles.tag}>
                <div className={styles.icon}>
                    <img src={interest_icon}/>
                </div>
                <div>React</div>
            </div>
            <div className={styles.tag}>
                <div className={styles.icon}>
                    <img src={interest_icon}/>
                </div>
                <div>
                    React
                </div>
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
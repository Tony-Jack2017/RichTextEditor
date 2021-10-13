import styles from './index.module.scss'

import Follow from "./components/Follow";

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.write}>
                <a href="">
                    <span style={{marginRight: '10px'}}>ICON</span>
                    <span>WRITE</span>
                </a>
            </div>
            <hr/>
            <div className={styles.category}>
                This is interest category
            </div>
            <hr/>
            <div className={styles.follow}>
                <Follow />
            </div>
            <hr/>
            <div className={styles.tools}>
                This is Tools
            </div>
        </div>
    )
}


export default Sidebar
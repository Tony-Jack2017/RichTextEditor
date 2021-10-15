import styles from './index.module.scss'

import Sidebar from "./components/Sidebar";
import ArticleList from './components/ArticleList'

const Home = () => {
    return (
        <div id={styles.home}>
            <div className={styles.left}>
                <Sidebar />
            </div>
            <div className={styles.middle}>
                <ArticleList />
            </div>
            <div className={styles.right}>
                This is right block
            </div>
        </div>
    )
}

export default Home
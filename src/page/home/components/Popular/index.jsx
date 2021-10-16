import styles from './index.module.scss'

import Search from './components/Search'
import PopularShow from './components/PopularShow'
import Rank from "./components/Rank";

const Popular = () => {
    return (
        <div className={styles.popular}>
            <div className={styles.search}>
                <Search />
            </div>
            <div className={styles['popular-show']}>
                <PopularShow />
            </div>
            <div className={styles.rank}>
                <Rank />
            </div>
        </div>
    )
}

export default Popular
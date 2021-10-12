import styles from './index.module.scss'

import Poster from "./components/poster";

const Article = () => {
    return (
        <div className={styles.article}>
            <div>
                <div className={styles['article-header']}>
                    <Poster />
                </div>
                <article className={styles['article-body']}>
                    {/*This is article*/}
                </article>
                <aside className={styles['article-comment']}>
                    {/*This is commite*/}
                </aside>
            </div>
            <aside className={styles['article-sidebar']}>
                This article struct
            </aside>
        </div>
    )
}

export default Article
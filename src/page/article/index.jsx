import styles from './index.module.scss'

import Poster from "./components/poster"
import Content from "./components/content"
import Comment from "./components/comment"

const Article = () => {
    return (
        <div className={styles.article}>
            <div>
                <div className={styles['article-header']}>
                    <Poster/>
                </div>
                <article className={styles['article-body']}>
                    <Content/>
                </article>
                <aside className={styles['article-comment']}>
                    <Comment/>
                </aside>
            </div>
            <aside className={styles['article-sidebar']}>
                This article struct
            </aside>
        </div>
    )
}

export default Article
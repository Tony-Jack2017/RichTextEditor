import styles from './index.module.scss'

const Article = () => {
    return (
        <div className={styles.article}>
            <div>
                <div className={styles['article-header']}>
                    This is poster
                </div>
                <article className={styles['article-body']}>
                    This is article
                </article>
                <aside className={styles['article-comment']}>
                    This is commite
                </aside>
            </div>
            <aside className={styles['article-sidebar']}>
                This article struct
            </aside>

        </div>
    )
}

export default Article
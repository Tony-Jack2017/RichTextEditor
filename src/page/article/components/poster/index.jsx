import styles from './index.module.scss'

import poster_url from '../../../../asset/img/poster.jpg'

import author_avatar from '../../../../asset/mock/author_avatar.jpg'

const Poster = () => {
    return (
        <div className={styles.poster}>
            <div className={styles['poster-image']}>
                <img src={poster_url} width={'100%'}/>
            </div>
            <div className={styles['article-title']}>
                <h1>Why build own website</h1>
                <h2>This is sub-title</h2>
                <div className={styles['heat-list']}>
                    <div className={styles.heat}>
                        <div className={styles.icon}>
                            ICON
                        </div>
                        <div className={styles['heat-content']}>
                            Read 1000 times
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['article-author']}>
                <div className={styles['author_avatar']}>
                    <img src={author_avatar}/>
                </div>
                <div className={styles['author_info']}>
                    <p>Tom Jerry</p>
                    <p>Published in May 10, 2021</p>
                    <p>ICON, read time 1000+</p>
                </div>
                <div className={styles.follow}>
                    Follow
                </div>
            </div>
        </div>
    )
}

export default Poster
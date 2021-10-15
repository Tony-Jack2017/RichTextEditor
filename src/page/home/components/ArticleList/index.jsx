import styles from './index.module.scss'

import articleTest from '../../../../asset/mock/article-test.jpeg'
import avatarHome from '../../../../asset/mock/avatar-home.jpeg'

const ArticleList = () => {
    return (
        <div className={styles['article-list']}>
            <div className={styles['my-feed']}>
                <div className={styles.title}>
                    <h2>#My Feed</h2>
                </div>
                <div className={styles['select-menu']}>
                    <ul>
                        <li>Feature</li>
                        <li>Recent</li>
                        <li>Choose</li>
                    </ul>
                </div>
            </div>
            <div className={styles.list}>
                <div className={styles.article}>
                    <div className={styles.header}>
                        <div style={{display: 'inline-block', width: '60px', marginRight: '20px'}}>
                            <img src={avatarHome} width={'100%'} style={{borderRadius: '50%'}}/>
                        </div>
                        <div style={{display: 'inline-block'}} className={styles.info}>
                            <p style={{fontWeight: 'bold'}}>Tomasz Gil</p>
                            <p>Oct 14, 2021</p>
                        </div>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.content}>
                            <h2 className={styles['article-title']}>
                                Make the Most Out of Your Next Migration Project
                            </h2>
                            <p>
                                Recently, we've finished a migration of one of the frontend applications
                                I work with from Backbone to React. This was an endeavor for few
                                months but we've ended up in a much better place,
                            </p>
                        </div>
                        <div className={styles.poster}>
                            <img src={articleTest}/>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <div>
                            <div>18</div>
                            <div>Comment</div>
                        </div>
                        <div>Mark</div>
                    </div>
                </div>
                <div className={styles.article}>
                    <div className={styles.header}>
                        <div style={{display: 'inline-block', width: '60px', marginRight: '20px'}}>
                            <img src={avatarHome} width={'100%'} style={{borderRadius: '50%'}}/>
                        </div>
                        <div style={{display: 'inline-block'}} className={styles.info}>
                            <p style={{fontWeight: 'bold'}}>Tomasz Gil</p>
                            <p>Oct 14, 2021</p>
                        </div>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.content}>
                            <h2 className={styles['article-title']}>
                                Make the Most Out of Your Next Migration Project
                            </h2>
                            <p>
                                Recently, we've finished a migration of one of the frontend applications
                                I work with from Backbone to React. This was an endeavor for few
                                months but we've ended up in a much better place,
                            </p>
                        </div>
                        <div className={styles.poster}>
                            <img src={articleTest}/>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <div>
                            <div>18</div>
                            <div>Comment</div>
                        </div>
                        <div>Mark</div>
                    </div>
                </div>
                <div className={styles.article}>
                    <div className={styles.header}>
                        <div style={{display: 'inline-block', width: '60px', marginRight: '20px'}}>
                            <img src={avatarHome} width={'100%'} style={{borderRadius: '50%'}}/>
                        </div>
                        <div style={{display: 'inline-block'}} className={styles.info}>
                            <p style={{fontWeight: 'bold'}}>Tomasz Gil</p>
                            <p>Oct 14, 2021</p>
                        </div>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.content}>
                            <h2 className={styles['article-title']}>
                                Make the Most Out of Your Next Migration Project
                            </h2>
                            <p>
                                Recently, we've finished a migration of one of the frontend applications
                                I work with from Backbone to React. This was an endeavor for few
                                months but we've ended up in a much better place,
                            </p>
                        </div>
                        <div className={styles.poster}>
                            <img src={articleTest}/>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <div>
                            <div>18</div>
                            <div>Comment</div>
                        </div>
                        <div>Mark</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleList
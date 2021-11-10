import styles from './index.module.scss'

import avatarHome from '../../../../asset/mock/avatar-home.jpeg'
import {getArticleAll} from "../../../../api/article";
import {useEffect, useState} from "react";

import like from '../../../../asset/img/like.png'
import comment from  '../../../../asset/img/comment.png'

const ArticleList = () => {
    const [articleList, setArticleList] = useState([])
    useEffect(() => {
        getArticleAll().then(
            resp => {
                setArticleList(resp.data.article_list)
            }
        )
    },[])
    return (
        <div className={styles['article-list']}>
            <div className={styles.list}>
                {
                    articleList.map(article => {
                        return (
                            <div className={styles.article} key={article.id}>
                                <div className={styles.header}>
                                    <div style={{display: 'inline-block', width: '60px', marginRight: '20px'}}>
                                        <img src={avatarHome} width={'100%'} style={{borderRadius: '50%'}}/>
                                    </div>
                                    <div style={{display: 'inline-block'}} className={styles.info}>
                                        <p style={{fontWeight: 500}}>{article.author}</p>
                                        <p>Oct 14, 2021</p>
                                    </div>
                                </div>
                                <div className={styles.body}>
                                    <div className={styles.content}>
                                        <h2 className={styles['article-title']}>
                                            {article.title}
                                        </h2>
                                        <p>
                                            {article.intro}
                                        </p>
                                    </div>
                                    <div className={styles.poster}>
                                        <img src={article.poster}/>
                                    </div>
                                </div>
                                <div className={styles.footer}>
                                    <div>
                                        <div style={{height: '100%'}}><img src={like} height='60%'/> {article.follow_num}</div>
                                        <div style={{height: '100%'}}><img src={comment} height='60%'/> Comment</div>
                                    </div>
                                    <div>Mark</div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default ArticleList
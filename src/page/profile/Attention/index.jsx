import styles from './index.module.scss'

import avatar from '../../../asset/mock/author_avatar.jpg'
import follow_avatar from  '../../../asset/mock/avatar-home.jpeg'

const Attention = () => {
    return (
        <div className={styles.attention}>
            <div className={styles.left}>
                <div className={styles.search}>
                    <input className='input' placeholder="请输入关注博主的名称"/>
                </div>
                <div className={styles.data}>
                    <div>
                        <p>关注</p>
                        <p>
                            10
                        </p>
                    </div>
                    <div>
                        <p>关注我的人</p>
                        <p>
                            20
                        </p>
                    </div>
                    <div>
                        <p>近一月的关注</p>
                        <p>
                            5
                        </p>
                    </div>
                </div>
                <div className={styles.recent}>
                    <p>来之巴尔吉尼亚的勇者</p>
                    <div className={styles['recent-footer']}>
                        <img src={follow_avatar}/>
                        <p>
                            偷包谷的猴子
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                {
                    [1].map(n => {
                        return (
                            <div className={styles.card} key={n}>
                                <div className={styles.avatar}>
                                    <img src={avatar}/>
                                </div>
                                <div className={styles['author-info']}>
                                    <h3>Tom Jerry</h3>
                                    <p>
                                        I'm a interface developer for the website.
                                    </p>
                                    <div className={styles['follow-author']}>
                                        <button>Follow</button>
                                    </div>
                                </div>
                            </div>)
                    })
                }
            </div>
        </div>
    )
}

export default Attention
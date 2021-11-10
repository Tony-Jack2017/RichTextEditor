import styles from './index.module.scss'

import avatar from '../../../asset/mock/author_avatar.jpg'

const Attention = () => {
    return (
        <div className={styles.attention}>
            <div className={styles.left}>
                <div className={styles.search}>
                    <input className='input' placeholder="请输入关注博主的名称"/>
                </div>
                <div className={styles.data}>
                    <div>
                        关注
                    </div>
                    <div>
                        关注我的人
                    </div>
                    <div>
                        近一月的关注
                    </div>
                </div>
                <div className={styles.recent}>
                    偷包谷的猴子
                </div>
            </div>
            <div className={styles.right}>
                {
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(n => {
                        return (
                            <div className={styles.card}>
                                <div className={styles.avatar}>
                                    <img src={avatar}/>
                                </div>
                                <div>
                                    <div>
                                        <h3>Tom Jerry</h3>
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
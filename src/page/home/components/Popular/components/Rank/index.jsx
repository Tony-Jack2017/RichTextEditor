import styles from './index.module.scss'
import {Fragment} from "react";

const Rank = () => {
    return (
        <Fragment>
            <div className={styles['rank-header']}>
                <h3>This is October Article Rank</h3>
            </div>
            <div className={styles['rank-list']}>
                <div className={styles.number}>
                    <h3 className={styles['number-ranking']}>#1</h3>
                    <div className={styles['number-content']}>
                        <h2>The Video made with React</h2>
                        <p>Tom Jerry</p>
                        <div className={styles['content-footer']}>
                            <div style={{display: 'flex'}}>
                                <div style={{marginRight: '10px'}}>18</div>
                                <div>comment</div>
                            </div>
                            <div>Mark</div>
                        </div>
                    </div>
                </div>
                <div className={styles.number}>
                    <h1 className={styles['number-ranking']}>#2</h1>
                    <div className={styles['number-content']}>
                        <h2>The Video made with React</h2>
                        <p>Tom Jerry</p>
                        <div className={styles['content-footer']}>
                            <div style={{display: 'flex'}}>
                                <div style={{marginRight: '10px'}}>18</div>
                                <div>comment</div>
                            </div>
                            <div>Mark</div>
                        </div>
                    </div>
                </div>
                <div className={styles.number}>
                    <h1 className={styles['number-ranking']}>#3</h1>
                    <div className={styles['number-content']}>
                        <h2>The Video made with React</h2>
                        <p>Tom Jerry</p>
                        <div className={styles['content-footer']}>
                            <div style={{display: 'flex'}}>
                                <div style={{marginRight: '10px'}}>18</div>
                                <div>comment</div>
                            </div>
                            <div>Mark</div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Rank
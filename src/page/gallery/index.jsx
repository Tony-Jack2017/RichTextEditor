import  styles from './index.module.scss'

import Carousel from '../../components/common/Carousel'
import photoTest from '../../asset/mock/photo-test.jpg'

const Gallery = () => {
    return (
        <div id={styles.gallery}>
            <div className={styles.content}>
                <div className={styles.carousel}>
                    <Carousel/>
                </div>
                <div className={styles['photo-album']}>
                    {
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((n, index) => {
                            return (
                                <div className={styles.photo} key={index}>
                                    <div className={styles['photo-poster']}>
                                        <img src={photoTest} />
                                    </div>
                                    <div className={styles['photo-content']}>
                                        <h2>Why Use React to build our website interface</h2>
                                        <p>TomJerry</p>
                                        <div className={styles['content-footer']}>
                                            <div style={{display: 'flex'}}>
                                                <div style={{marginRight: '10px'}}>18</div>
                                                <div>comment</div>
                                            </div>
                                            <div className={styles['learn-more']}>
                                                learn more >>>>>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Gallery
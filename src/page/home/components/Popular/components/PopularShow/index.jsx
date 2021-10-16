import styles from './index.module.scss'
import {Fragment} from "react";

import popularImage from '../../../../../../asset/mock/popular.jfif'

const PopularShow = () => {
    return (
        <Fragment>
            <div className={styles['popular-poster']}>
                <img src={popularImage} width={'100%'} style={{borderRadius: '8px'}}/>
            </div>
            <div className={styles['popular-content']}>
                <h2>
                    This Senior React
                </h2>
                <div className={styles['learn-more']} >
                    <a href="">
                        Learn More
                    </a>
                </div>
            </div>
        </Fragment>
    )
}

export default PopularShow
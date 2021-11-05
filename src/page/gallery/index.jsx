import  styles from './index.module.scss'

import Carousel from '../../components/common/Carousel'
import photoTest from '../../asset/mock/photo-test.jpg'

import { getPictureAll } from '../../api/gallery'
import {useEffect, useState} from "react";

const Gallery = () => {

    const [pictureList, setPictureList] = useState([])

    useEffect(() => {
        getPictureAll().then(
            resp => {
                setPictureList(resp.data.picture_list)
            }
        )
    },[])

    return (
        <div id={styles.gallery}>
            <div className={styles.content}>
                <div className={styles.carousel}>
                    <Carousel/>
                </div>
                <div className={styles['photo-album']}>
                    {
                        pictureList.map((n, index) => {
                            return (
                                <div className={styles.photo} key={index}>
                                    <div className={styles['photo-poster']}>
                                        <img src={n.url} />
                                    </div>
                                    <div className={styles['photo-content']}>
                                        <h2>{n.description}</h2>
                                        <p>{n.author}</p>
                                        <div className={styles['content-footer']}>
                                            <div style={{display: 'flex'}}>
                                                <div style={{marginRight: '10px'}}>{n.follow_num}</div>
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
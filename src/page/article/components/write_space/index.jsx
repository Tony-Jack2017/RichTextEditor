import styles from './index.module.scss'
import {useRef, useState} from "react";

import TextEditor from '../../../../components/common/TextEditor'

const WriteArticle = () => {

    const inputImage = useRef(null)

    const [cover, setCover] = useState('')

    const getImage = () => {
        inputImage.current.dispatchEvent(new MouseEvent('click'))
    }

    const selectFile = (event) => {
        setCover(URL.createObjectURL(new Blob(event.target.files)))
    }

    return (
        <div>
            <div className={styles['write_space']}>
                <div className={styles.title}>
                    <input type="text" placeholder="Title..."/>
                </div>
                <div>
                    <div className={styles.cover}>
                        {
                            cover === ''
                                ?
                                <div className={styles['select_cover']}>
                                    <img width='100' height='100' onClick={getImage}/>
                                    <input type="file" ref={inputImage} onChange={selectFile}
                                           style={{display: 'none'}}/>
                                </div>
                                :
                                <div className={styles['show_cover']}>
                                    <img src={cover}/>
                                </div>
                        }

                    </div>
                </div>
                <div className={styles.intro}>
                    <textarea placeholder="Add you intro" />
                </div>
                <div style={{height: '200px', width: "30%"}}>
                    <TextEditor />
                </div>
                <div>
                    <button>Confirm Text</button>
                </div>
            </div>
        </div>
    )
}

export default WriteArticle
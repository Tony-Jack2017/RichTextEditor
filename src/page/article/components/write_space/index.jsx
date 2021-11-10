import styles from './index.module.scss'
import {useRef, useState} from "react";

import posterUpload from '../../../../asset/img/poster-upload.png'

import TextEditor from '../../../../components/common/TextEditor'

import { createArticle } from "../../../../api/article"

const WriteArticle = (props) => {

    const inputImage = useRef(null)
    const editor = useRef(null)
    const title = useRef(null)
    const intro = useRef(null)
    const [cover, setCover] = useState('')


    const getImage = () => {
        inputImage.current.dispatchEvent(new MouseEvent('click'))
    }
    const selectFile = (event) => {
        setCover(URL.createObjectURL(new Blob(event.target.files)))
    }
    const publishArticle = () => {
        const data = {
            title: title.current.value,
            content: editor.current.content(),
            author_id: 1,
            author: "TomJerry",
            intro: intro.current.value,
            poster: "https://cdn.hashnode.com/res/hashnode/image/upload/v1635148061235/kg5sVXRXT.png?w=1000&fit=crop&crop=entropy&auto=compress"
        }
        createArticle(data).then(resp => {
            props.history.replace('/home')
        })
    }

    return (
        <div>
            <div className={styles['write_space']}>
                <div className={styles.title}>
                    <input ref={title} type="text" placeholder="Title..."/>
                </div>
                <div>
                    <div className={styles.cover}>
                        {
                            cover === ''
                                ?
                                <div className={styles['select_cover']}>
                                    <img src={posterUpload} width='100' onClick={getImage}/>
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
                    <textarea ref={intro} placeholder="Add you intro" />
                </div>
                <div style={{height: '300px', width: "30%"}}>
                    <TextEditor ref={editor} />
                </div>
                <div>
                    <button onClick={publishArticle}>Confirm Text</button>
                </div>
            </div>
        </div>
    )
}

export default WriteArticle
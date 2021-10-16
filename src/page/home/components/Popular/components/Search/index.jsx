import {Fragment} from "react";
import styles from './index.module.scss'

const Search = () => {
    return (
        <Fragment>
            <div className={styles.prefix}>
               S
            </div>
            <input className={styles.input} type='text' placeholder="Please input you want search" />
            <div className={styles.suffix}>
                s
            </div>
        </Fragment>
    )
}

export default Search
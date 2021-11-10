import styles from './index.module.scss'

import Follow from "./components/Follow";
import Category from "./components/Category";
import {NavLink} from "react-router-dom";

import writeLogo from '../../../../asset/img/write-logo.png'

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.write}>
                <NavLink to="/create/article">
                    <img src={writeLogo} style={{marginRight: '10px'}} />
                    <span>创作工坊</span>
                </NavLink>
            </div>
            <hr/>
            <div className={styles.category}>
                <Category />
            </div>
            <hr/>
            <div className={styles.follow}>
                <Follow />
            </div>
            <hr/>
            <div className={styles.tools}>
                This is Tools
            </div>
        </div>
    )
}


export default Sidebar
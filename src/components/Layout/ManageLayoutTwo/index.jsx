import styles from './index.module.scss'
import {Route} from "react-router-dom";

import Dashboard from "../../../page/profile/Dashboard";
import ArticleList from "../../../page/profile/Article";
import FollowArticle from "../../../page/profile/FollowArticle"
import Attention from "../../../page/profile/Attention"
import Picture from "../../../page/profile/Picture";

const ManageLayoutTwo = (Header) => {
    return function ManageLayoutWrap() {
        return (
            <div className={styles['manage-layout']}>
                <div className={styles.header}>
                    <Header />
                </div>
                <div className={styles.body}>
                    <Route path='/profile/dashboard' component={Dashboard}/>
                    <Route path='/profile/articleList' component={ArticleList}/>
                    <Route path='/profile/follow' component={FollowArticle}/>
                    <Route path='/profile/attention' component={Attention}/>
                    <Route path='/profile/picture' component={Picture}/>
                </div>
            </div>
        )
    }
}

export default ManageLayoutTwo
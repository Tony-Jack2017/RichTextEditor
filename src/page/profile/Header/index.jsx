import styles from './index.module.scss'

import personalPoster from '../../../asset/mock/personal-poster.jpeg'
// import personalAvatar from '../../../../asset/mock/personal-avator.png'

import logo from '../../../asset/img/logo.png'
import {NavLink} from "react-router-dom";

const Header1 = () => {
    return (
        <div className={styles['personal-header']}>
            <div className={styles['header-poster']}>
                <img src={personalPoster}/>
            </div>
            <div className={styles['personal-content']}>
                <div className={styles['header-content']}>
                    <div className={styles['personal-avatar']}>
                        <div>
                            <img src={logo}/>
                        </div>
                    </div>
                    <div className={styles['personal-info']}>
                        <h1>Gan WR</h1>
                        <NavLink to='/profile/setting/user_setting'>
                            <p>Edit Profile</p>
                        </NavLink>
                        <p>
                            Hello World, JS Full-stack Developer
                        </p>
                    </div>
                </div>
                <div className={styles['content-footer']}>
                    <ul>
                        <li>
                            <NavLink to='/profile/dashboard'>
                                数据
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/profile/articleList'>
                                文章
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/profile/follow'>
                                收藏
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/profile/attention'>
                                关注
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/profile/picture'>
                                图画
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

    )
}

export default Header1
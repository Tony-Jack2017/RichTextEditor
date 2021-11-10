import {Route} from 'react-router'
import styles from './index.module.scss'

import AccountSetting from './components/AccountSetting'
import UserSetting from './components/UserSetting'
import {NavLink} from 'react-router-dom'

const Setting = (props) => {

    return (
        <div className={styles.setting}>
            <div className={styles['setting-type']}>
                <div className={styles['setting-type-header']}>{props.location.pathname}</div>
                <div className={styles['setting-type-content']}>
                    <ul>
                        <NavLink to="/profile/setting/user_setting">
                            <li>UserSetting</li>
                        </NavLink>
                        <NavLink to="/profile/setting/account_setting">
                            <li>AccountSetting</li>
                        </NavLink>
                    </ul>
                </div>
            </div>
            <div className={styles['setting-content']}>
                <Route path="/profile/setting/user_setting" component={UserSetting}/>
                <Route path="/profile/setting/account_setting" component={AccountSetting}/>
            </div>
        </div>
    )
}

export default Setting
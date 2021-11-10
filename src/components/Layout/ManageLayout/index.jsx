import React from 'react'
import './index.scss'



import UserAdminNav from '../../Nav/UserAdminNav'
import {NavLink, Route} from "react-router-dom";
import AccountSetting from "../../../page/profile/Setting/components/AccountSetting";
import UserSetting from "../../../page/profile/Setting/components/UserSetting";
import logo from '../../../asset/img/logo.png'

const ManageLayout = (Header) => {
    function ManageLayoutWrap() {
        return (
            <div className={'manage-layout'}>
                <div className={'profile-body-left profile-aside siderbar'}>
                    <div className='avator'>
                        <NavLink to='/profile/personal'>
                            <img src={logo}/>
                        </NavLink>
                    </div>
                    <div className='siderbar-menu'>
                        <UserAdminNav/>
                    </div>
                </div>
                <div className={'profile-body-right'}>
                    <div style={{borderBottom: '1px solid #DDDDDD'}}></div>
                    <article className='profile-content'>
                        <Route path='/profile/setting/account_setting' component={AccountSetting} />
                        <Route path='/profile/setting/user_setting' component={UserSetting} />
                    </article>
                </div>
            </div>
        )
    }
    return ManageLayoutWrap
}

export default ManageLayout
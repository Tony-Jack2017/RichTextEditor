import {NavLink} from 'react-router-dom'
import './index.scss'
import logo from '../../../asset/img/logo.png'

const MainNav = (props) => {
    return (
        <div className='header'>
            <div className='header-left logo'>
                <img src={logo}/>
            </div>
            <div className='header-nav'>
                <ul>
                    <li>
                        <NavLink to="/">首页</NavLink>
                    </li>
                    <li>
                        <NavLink to="/gallery">画廊</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">关于</NavLink>
                    </li>
                </ul>
            </div>
            <div className='header-right'>
                <div className='entry'>
                    <NavLink to="/login">
                        <button className='sign-in'>登录</button>
                    </NavLink>
                    <NavLink to="/sign">
                        <button className='sign-up'>注册</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default MainNav
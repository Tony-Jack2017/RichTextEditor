import {NavLink} from 'react-router-dom'
import navList from './data.js'
import './index.scss'

const UserAdminNav = () => {
    return (
        <div className='menu'>
            <ul>
                {
                    navList.map(item => {
                        return (
                            <li className='item' key={item.path}>
                                <NavLink to={`${item.path}`}>{item.title}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default UserAdminNav
import { NavLink } from 'react-router-dom'
import './index.scss'

const MainNav = (props) => {
  return (
    <div className='header'>
      <div className='header-left logo'>
        This is logo
      </div>
      <div className='header-nav'>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
      <div className='header-right'>
        <div className='entry'>
          <button className='sign-in'>Sign in</button>
          <button className='sign-up'>Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default MainNav
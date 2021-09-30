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
          <NavLink to="/login">
            <button className='sign-in'>Sign in</button>
          </NavLink>
          <NavLink to="/sign">
            <button className='sign-up'>Sign up</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default MainNav
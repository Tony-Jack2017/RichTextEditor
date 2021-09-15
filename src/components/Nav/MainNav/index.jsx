import { NavLink } from 'react-router-dom'
import './index.scss'

const MainNav = () => {
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
        This is avator
      </div>
    </div>
  )
}

export default MainNav
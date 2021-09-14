import { Route } from 'react-router-dom'

import MainNav from '../../Nav/MainNav'
import Home from '../../../page/home'
import Gallery from '../../../page/gallery'
import About from '../../../page/about'

const MainLayout = () => {
  return(
    <div className='main-layout'> 
      <div className='main-header'>
        <MainNav/>
      </div>
      <div className='main-body'>
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/gallery' component={Gallery} />
        <Route path='/about' component={About} />
      </div>
    </div>
  )
}

export default MainLayout
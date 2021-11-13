import {Route} from 'react-router-dom'
import './index.scss'

import MainNav from '../../Nav/MainNav'
import Home from '../../../page/home'
import Gallery from '../../../page/gallery'
import About from '../../../page/about'
import Article from "../../../page/article";
import WriteArticle from "../../../page/write_space";

const MainLayout = () => {
    return (
        <div className='main-layout'>
            <div className='main-header'>
                <div className='cover'></div>
                <MainNav/>
            </div>
            <div className='main-body'>
                <Route exact path='/' component={Home}/>
                <Route path='/home' component={Home}/>
                <Route path='/gallery' component={Gallery}/>
                <Route path='/about' component={About}/>
                <Route path='/article' component={Article}/>
                <Route path='/create/article' component={WriteArticle}/>
            </div>
        </div>
    )
}

export default MainLayout

import './mock/user'
import {Switch, Route} from 'react-router-dom'

import MainLayout from './components/Layout/MainLayout'
import Profile from './page/profile'
import Login from './page/login'
import Sign from './page/sign'

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path='/profile' component={Profile}/>
                <Route path='/login' component={Login}/>
                <Route path='/sign' component={Sign}/>
                <Route path='/' component={MainLayout}/>
            </Switch>
        </div>
    )
}

export default App;

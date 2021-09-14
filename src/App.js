import './mock/user'
import { Switch, Route } from 'react-router-dom'

import MainLayout from './components/Layout/MainLayout'
import Profile from './page/profile'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/profile' component={Profile} />
        <Route path='/' component={MainLayout} />
      </Switch>
    </div>
  )
}

export default App;

import { BrowserRouter } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios'
import './mock/user'

// import TotalDataSpilt  from './page/profile/Dashboard/components/TotalDataSpilt'

import Profile from './page/profile';


const getUserList = () => {
  axios.get('/api/get_userList', {dataType: 'json'}).then(resp => {
  })
}

function App() {
  useEffect(() => {
    getUserList()
  }, [])
  return (
    <BrowserRouter>
      <div className="App">
        {/* <TotalDataSpilt /> */}
        <Profile />
      </div>
    </BrowserRouter>
  )
}

export default App;

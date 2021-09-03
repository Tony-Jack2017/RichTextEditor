
import { useEffect } from 'react';
import axios from 'axios'
import './mock/user'
import './App.css';

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
    <div className="App">
      {/* <TotalDataSpilt /> */}
      <Profile />
    </div>
  );
}

export default App;

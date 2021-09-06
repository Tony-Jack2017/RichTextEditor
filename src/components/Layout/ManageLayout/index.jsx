import React from 'react'
import './index.scss'

import Dashboard from '../../../page/profile/Dashboard'

const ManageLayout = (Header) => {
  function ManageLayoutWrap() {
    return (
      <div className={'manage-layout'}>
        <div className={'profile-body-left profile-aside'}>
          <div>
            logo
          </div>
          <div>
          </div>
        </div>
        <div className={'profile-body-right'}>
          <header className={'profile-header'}>
            <Header /> 
          </header>
          <div style={{borderBottom: '1px solid #DDDDDD'}}></div>
          <article className='profile-content'>
            <Dashboard />
          </article>
        </div>
      </div>
    )
  }
  return ManageLayoutWrap
}

export default ManageLayout
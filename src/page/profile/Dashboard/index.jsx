import TotalDataSpilt from './components/TotalDataSpilt'
import Chart from './components/Chart'
import Popular from './components/Popular'

import React from 'react'

const Dashboard = () => {
    return (
        <section style={{background: '#ffffff',marginTop: '10px',borderRadius: '8px', border: '1px solid rgba(229, 231, 235, 1)'}}>
            <TotalDataSpilt/>
            <Chart/>
            <Popular/>
        </section>
    )
}

export default Dashboard
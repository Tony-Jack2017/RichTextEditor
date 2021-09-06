import TotalDataSpilt from './components/TotalDataSpilt'
import Chart from './components/Chart'
import Popular from './components/Popular'

import React from 'react'

const Dashboard = () => {
  return (
    <section>
      <TotalDataSpilt />
      <Chart />
      <Popular />
    </section>
  )
}

export default Dashboard
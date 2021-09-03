import React, {useState,useEffect} from 'react'
import './index.scss'
import '../../../../../mock/user/data'
import axios from 'axios'


const TotalDataSpilt = () => {

  const [data, setData] = useState({
    view: {},
    collect: {},
    follow: {},
    article: {}
  })

  useEffect(() => {
    axios.get('/api/user/get_total_data', {dataType: 'json'}).then(resp => {
      setData(resp.data)
    })
  }, [])

  console.log(data);

  return (
    <div className="total_data">
      <div className="data_card">
        {data.view.total}
      </div>
      <div className='divider'></div>
      <div className="data_card">
        {data.collect.total}
      </div>
      <div className='divider'></div>
      <div className="data_card">
        {data.follow.total}
      </div>
      <div className='divider'></div>
      <div className="data_card">
        {data.article.total}
      </div>
    </div>
  )
}

export default TotalDataSpilt
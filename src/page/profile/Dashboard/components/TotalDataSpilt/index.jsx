import React, {useState,useEffect, Fragment} from 'react'
import './index.scss'
import '../../../../../mock/user/data'
import axios from 'axios'


const card_info = [
  {name: 'view', last: false},
  {name: 'collect', last: false},
  {name: 'follow', last: false},
  {name: 'article', last: true},
]


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


  return (
    <div className="total_data">
        {
          card_info.map((n, index) => {
            return (
              <Fragment key={index}>
                <div className="data_card">
                  <h3>{data[n.name].total}</h3>
                  <div className="card">
                    <span className={'card_head'}>Total { n.name.charAt(0).toUpperCase() + n.name.slice(1)}</span>
                    <div className={ data[n.name].flow_num > 0 ? 'card_body up' : 'card_body down'}>
                      <span>向上</span>
                      {data[n.name].flow_num > 0 ? '+' + data[n.name].flow_num : data[n.name].flow_num}
                    </div>
                  </div>
                </div>
                 {n.last ? '' : <div className='divider'></div>} 
              </Fragment>
            )
          })
        }
    </div>
  )
}

export default TotalDataSpilt
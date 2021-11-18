import * as echarts from 'echarts'
import { useEffect } from 'react'

const Chart = () => {

  let chart = {}
  let option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 2000, name: '搜索引擎' },
          { value: 735, name: '直接访问' },
          { value: 580, name: '邮件营销' },
          { value: 484, name: '联盟广告' },
          { value: 300, name: '视频广告' }
        ]
      }
    ]
  };
  useEffect(() => {
    chart = echarts.init(document.getElementById('myChart'))
    chart.setOption(option)
  }, [])

  return (
    <div style={{ height: '23.08vw', marginBottom: '2.22vw' }}>
      <div id='myChart' style={{ height: '23.08vw' }}></div>
    </div>
  )
}

export default Chart
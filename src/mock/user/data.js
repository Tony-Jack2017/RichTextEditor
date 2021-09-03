import Mock from 'mockjs'

export default Mock.mock('/api/user/get_total_data', {
  'view': {
    'total|+1': 202,
    'flow_num|-5-5': 2
  },
  'collect': {
    'total|1-300': 200,
    'flow_num|-5-5': -1
  },
  'follow': {
    'total|1-100': 20,
    'flow_num|-4-3': -1
  },
  'article': {
    'total|1-100': 20,
    'flow_num|1-10': 1
  }
})
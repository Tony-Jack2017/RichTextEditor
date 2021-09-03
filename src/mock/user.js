import Mock from 'mockjs'

export default Mock.mock('/api/get_userList', {
    "userList|4": [{
      "id|+1": 2,
      "name": '@cname',
      'age|18-30': 18,
      'sex|1': ['男', '女'],
      'job|1': ['web', 'java', 'python', 'c++', 'linux']
    }]
  }
)
import Mock from 'mockjs'

export default Mock.mock('/user/login', {
  'token': Mock.mock('@guid'),
})
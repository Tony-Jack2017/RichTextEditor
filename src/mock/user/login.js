import Mock from 'mockjs'

export default Mock.mock('/user/login', {
  'token': Mock.mock('@guid'),
  'userId|231234-434123': 342342
})
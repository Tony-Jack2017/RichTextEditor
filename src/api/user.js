import request from '../common/request'

export function userLogin(user_data) {
  return request({
    url: '/user/login',
    method: 'post',
    data: user_data
  })
}
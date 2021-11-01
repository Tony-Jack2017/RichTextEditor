import request from '../common/request'

export function userLogin(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}
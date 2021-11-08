import request from '../common/request'

export function userLogin(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}
export function userSignUp(data) {
  return request({
    url: '/user/sign_up',
    method: 'post',
    data
  })
}
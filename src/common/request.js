import axios from "axios";

// create an axios instance
const service = axios.create({
    baseURL: "http://localhost:8000/api/v1", // url = base url + request url
    timeout: 15000 //request timeout
})
/**
 * 请求拦截
 */
service.interceptors.request.use(
    config => {
        if (window.localStorage.token) {
            config.headers['Authorization'] = window.localStorage.token
        }
        return config
    },
    error => {
        console.log('请求拦截处出现错误')
        console.log(error)
    }
)
/**
 * 响应拦截
 */
service.interceptors.response.use(
    response => {
        if (response.status !== 200) {
            console.log('请求状态码不是200')
        } else {
            return response.data
        }
    },
    error => {
        console.log('响应拦截处出现错误')
        console.log(error)
    }
)

export default service
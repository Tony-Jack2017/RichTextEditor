import axios from "axios";

// create an axios instance
  const service = axios.create({
    baseURL: '', // url = base url + request url
    timeout: 3000 //request timeout
  })
  /**
   * 请求拦截
   */
  service.interceptors.request.use(
    config => {
      if(window.localStorage.token){
        config.headers['Authorization'] = window.localStorage.token
      }
      return config
    }
  )
  /**
   * 响应拦截
   */
  service.interceptors.response.use(
    response => {
      const res = response.data
      if(res.code !== 200) {
        alert(res.msg)
      }else{
        return res
      }
    }
  )

export default service
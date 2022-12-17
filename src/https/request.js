import axios from 'axios'

export function request (config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000
  })

  // 添加情趣拦截器
  instance.interceptors.request.use(res => {
    return res
  }, err => {
    console.log('请求拦截器时出错', err)
  })

  // 添加响应拦截器
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log('响应拦截器时出错', err)
  })

  return instance(config)
}

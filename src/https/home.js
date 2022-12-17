// 首页相关请求和方法

import { request } from './request'

export function getHomeMultidata () {
  return request({
    url: '/home/multidata'
  })
}

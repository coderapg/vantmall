// 首页相关请求和方法

import { request } from './request'

// 请求首页数据
export function getHomeMultidata () {
  return request({
    url: '/home/multidata'
  })
}

// 请求首页中tab切换数据
export function getHomeTabsData (type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}

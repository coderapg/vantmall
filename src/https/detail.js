// 详情页相关请求和方法
import { request } from './request'

// 请求详情页中的数据
export function getDetailData (iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

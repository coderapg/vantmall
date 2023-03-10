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

// 获取详情页中的推荐商品数据
export function recommendingCommodities (iid) {
  return request({
    url: '/recommend',
    params: {
      iid
    }
  })
}

// 抽取数据-商品信息
export class WaresInfo {
  constructor (itemInfo, columns, services) {
    this.columns = columns
    this.desc = itemInfo.desc
    this.discount = itemInfo.discountDesc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.realPrice = itemInfo.lowNowPrice
    this.services = services
    this.title = itemInfo.title
  }
}

// 抽离数据-商家信息
export class SellerInfo {
  constructor (info, itemInfo, idx) {
    this.allGoodsUrl = info.allGoodsUrl
    this.cFans = info.cFans
    this.cGoods = info.cGoods
    this.cSells = info.cSells
    this.idx = idx
    this.level = info.level
    this.name = info.name
    this.score = info.score
    this.shopId = info.shopId
    this.shopLogo = info.shopLogo
    this.shopUrl = info.shopUrl
    this.userId = info.userId
    this.extra = itemInfo.extra
  }
}

// 抽离数据-商品参数信息
export class GoodsParam {
  constructor (info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : ''
    this.infos = info.set
    this.sizes = rule.tables
  }
}

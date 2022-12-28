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

// 整合商品数据
export class GetGoodsInfo {
  constructor (columns, itemInfo, promotions) {
    this.columns = columns
    this.discountDesc = itemInfo.discountDesc
    this.iid = itemInfo.iid
    this.lowNowPrice = itemInfo.lowNowPrice
    this.lowPrice = itemInfo.lowPrice
    this.shopId = itemInfo.shopId
    this.title = itemInfo.title
    this.userId = itemInfo.userId
    this.promotionsList = promotions.list
  }
}
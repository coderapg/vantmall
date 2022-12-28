<template>
  <div id="detail">
    <detail-nav-bar />
    <van-list offset="100" finished-text="没有更多了">
      <detail-swipe :banner-arr="bannerArr" />
      <div class="detail-wares-related">
        <detail-wares-related :detailWaresInfo="detailWaresInfo" />
        <detail-seller :sellerInfo="sellerInfo" />
      </div>
    </van-list>
    <detail-goods-action />
  </div>
</template>

<script>
import { getDetailData, WaresInfo, SellerInfo } from 'https/detail'

import DetailNavBar from './components/DetailNavBar'
import DetailSwipe from './components/DetailSwipe'
import DetailGoodsAction from './components/DetailGoodsAction'
import DetailSeller from './components/DetailSeller'
import DetailWaresRelated from './components/DetailWaresRelated'

export default {
  name: 'Detail',
  data () {
    return {
      idx: '',
      bannerArr: [],
      detailWaresInfo: {},
      sellerInfo: {}
    }
  },
  components: {
    DetailNavBar,
    DetailSwipe,
    DetailGoodsAction,
    DetailSeller,
    DetailWaresRelated
  },
  created () {
    const { query: { iid } } = this.$route
    this.getDetailData(iid)
  },
  methods: {
    getDetailData (iid) {
      getDetailData(iid).then(res => {
        // columns, detailInfo, isLogin, itemParams, promotions, rate, shopInfo, skuInfo, topBar
        const { columns, itemInfo, shopInfo } = res.result
        // 1. 详情页轮播图数据
        this.bannerArr = itemInfo.topImages
        // 2. 获取商品信息
        this.detailWaresInfo = new WaresInfo(itemInfo, columns, shopInfo.services)
        // 3. 创建商品信息对象
        this.sellerInfo = new SellerInfo(shopInfo, itemInfo, this.iid)
      })
    }
  }
}
</script>

<style lang="less" scoped>
  #detail {
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 9999;
  }
  .detail-wares-related {
    background-color: #f0f0f0;
    padding: 10px 9px 30px 9px;
    box-sizing: border-box;
    .wares-info {
      background-color: #fff;
    }
  }
</style>

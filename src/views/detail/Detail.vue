<template>
  <div id="detail">
    <detail-nav-bar />
    <van-list offset="100" finished-text="没有更多了">
      <detail-swipe :banner-arr="bannerArr" />
      <div class="detail-wares-related">
        <detail-wares-related :detailWaresInfo="detailWaresInfo" />
        <detail-seller :sellerInfo="sellerInfo" />
      </div>
      <detail-goods-info :goods-info="goodsInfo" />
      <detail-param-info :param-info="paramInfo" ref="paramInfo" />
    </van-list>
    <detail-goods-action />
  </div>
</template>

<script>
import { getDetailData, WaresInfo, SellerInfo, GoodsParam } from 'https/detail'

import DetailNavBar from './components/DetailNavBar'
import DetailSwipe from './components/DetailSwipe'
import DetailGoodsAction from './components/DetailGoodsAction'
import DetailSeller from './components/DetailSeller'
import DetailWaresRelated from './components/DetailWaresRelated'
import DetailGoodsInfo from './components/DetailGoodsInfo'
import DetailParamInfo from './components/DetailParamInfo'

export default {
  name: 'Detail',
  data () {
    return {
      idx: '',
      bannerArr: [],
      detailWaresInfo: {},
      sellerInfo: {},
      goodsInfo: {},
      paramInfo: {}
    }
  },
  components: {
    DetailNavBar,
    DetailSwipe,
    DetailGoodsAction,
    DetailSeller,
    DetailWaresRelated,
    DetailGoodsInfo,
    DetailParamInfo
  },
  created () {
    const { query: { iid } } = this.$route
    this.getDetailData(iid)
  },
  methods: {
    getDetailData (iid) {
      getDetailData(iid).then(res => {
        // isLogin, promotions, rate, shopInfo, skuInfo, topBar
        const { columns, detailInfo, itemInfo, itemParams, shopInfo } = res.result
        // 1. 详情页轮播图数据
        this.bannerArr = itemInfo.topImages
        // 2. 获取商品信息
        this.detailWaresInfo = new WaresInfo(itemInfo, columns, shopInfo.services)
        // 3. 创建商品信息对象
        this.sellerInfo = new SellerInfo(shopInfo, itemInfo, this.iid)
        // 4. 保存商品的详情数据
        this.goodsInfo = detailInfo
        // 5. 保存商品的参数信息
        this.paramInfo = new GoodsParam(itemParams.info, itemParams.rule)
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
    padding: 10px 9px;
    box-sizing: border-box;
    .wares-info {
      background-color: #fff;
    }
  }
</style>

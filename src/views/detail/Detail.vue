<template>
  <div id="detail" ref="detail">
    <detail-nav-bar />
    <van-list offset="300" finished-text="没有更多了">
      <detail-swipe :banner-arr="bannerArr" />
      <div class="detail-wares-related">
        <detail-wares-related :detailWaresInfo="detailWaresInfo" />
        <detail-seller :sellerInfo="sellerInfo" />
      </div>
      <detail-goods-info :goods-info="goodsInfo" />
      <detail-param-info :param-info="paramInfo" ref="paramInfo" />
      <detail-comments-rate :comment-info="commentInfo" ref="commentInfo" />
      <goods-list :active-goods="activeGoods" ref="goodsList" />
    </van-list>
    <detail-goods-action />
    <back-top  v-show="backShow" />
  </div>
</template>

<script>
import { getDetailData, WaresInfo, SellerInfo, GoodsParam, recommendingCommodities } from 'https/detail'

import DetailNavBar from './components/DetailNavBar'
import DetailSwipe from './components/DetailSwipe'
import DetailGoodsAction from './components/DetailGoodsAction'
import DetailSeller from './components/DetailSeller'
import DetailWaresRelated from './components/DetailWaresRelated'
import DetailGoodsInfo from './components/DetailGoodsInfo'
import DetailParamInfo from './components/DetailParamInfo'
import DetailCommentsRate from './components/DetailCommentsRate'

import GoodsList from 'components/content/GoodsList/GoodsList'
import BackTop from 'components/common/backTop/BackTop'

export default {
  name: 'Detail',
  data () {
    return {
      idx: '',
      bannerArr: [],
      detailWaresInfo: {},
      sellerInfo: {},
      goodsInfo: {},
      paramInfo: {},
      commentInfo: {},
      activeGoods: [],
      backShow: false
    }
  },
  components: {
    DetailNavBar,
    DetailSwipe,
    DetailGoodsAction,
    DetailSeller,
    DetailWaresRelated,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentsRate,
    GoodsList,
    BackTop
  },
  created () {
    const { query: { iid } } = this.$route
    this.getDetailData(iid)
    this.recommendingCommodities(iid)
  },
  mounted () {
    window.addEventListener('scroll', this.vantScroll, true)
  },
  methods: {
    getDetailData (iid) {
      getDetailData(iid).then(res => {
        // isLogin, promotions, shopInfo, skuInfo, topBar
        const { columns, detailInfo, itemInfo, itemParams, rate, shopInfo } = res.result
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
        // 6. 保存评论信息
        this.commentInfo = rate.cRate !== 0 ? rate.list[0] : {}
      })
    },
    // 获取商品对应的推荐数据
    recommendingCommodities (iid) {
      recommendingCommodities(iid).then(res => {
        const { data: { list }, success } = res
        if (success) {
          this.activeGoods = list
        }
      })
    },
    // 侦听滚动
    vantScroll (event) {
      const { scrollTop } = event.target
      if (scrollTop > 1000) {
        this.backShow = true
      } else {
        this.backShow = false
      }
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
    width: 100vw;
    height: 100vh;
    z-index: 9999;
  }
  .van-list {
    position: relative;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
    width: 100vw;
    height: 574px;
    overflow-y: auto;
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

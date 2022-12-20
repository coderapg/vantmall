<template>
  <div id="detail">
    <detail-nav-bar />
    <pull-refresh class="pull-refresh">
      <detail-swipe :banner-arr="bannerArr" />
    </pull-refresh>
  </div>
</template>

<script>
import { getDetailData } from 'https/detail'

import DetailNavBar from './components/DetailNavBar'
import DetailSwipe from './components/DetailSwipe'

import PullRefresh from 'components/common/PullRefresh/PullRefresh'

export default {
  name: 'Detail',
  data () {
    return {
      idx: '',
      bannerArr: []
    }
  },
  components: {
    DetailNavBar,
    PullRefresh,
    DetailSwipe
  },
  created () {
    const { query: { iid } } = this.$route
    this.getDetailData(iid)
  },
  methods: {
    getDetailData (iid) {
      getDetailData(iid).then(res => {
        // columns, detailInfo, isLogin, itemParams, promotions, rate, shopInfo, skuInfo, topBar
        const { columns, itemInfo } = res.result
        // 详情页轮播图数据
        this.bannerArr = itemInfo.topImages
        console.log('---', columns)
      })
    }
  }
}
</script>

<style>
  #detail {
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 9999;
  }
</style>

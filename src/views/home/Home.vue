<template>
  <div id="home">
    <home-nav-bar class="home-nav-bar" />
    <pull-refresh class="pull-refresh">
      <home-swipe class="banner" :banner-arr="bannerArr" />
      <home-recommend :recommend-arr="recommendArr" />
      <home-popular />
      <home-tab class="home-tab" :tabs-arr="['流行', '新款', '推荐']" :offsetTop="40" @handleTabClick="handleTabClick" :active-goods="activeGoods" ref="homeTab" />
    </pull-refresh>
  </div>
</template>

<script>
import { getHomeMultidata, getHomeTabsData } from 'https/home'

import HomeNavBar from './components/HomeNavBar'
import HomeSwipe from './components/HomeSwipe'
import HomeRecommend from './components/HomeRecommend'
import HomePopular from './components/HomePopular'
import HomeTab from './components/HomeTab'

import PullRefresh from 'components/common/PullRefresh/PullRefresh'

export default {
  name: 'Home',
  data () {
    return {
      bannerArr: [], // 存储首页轮播图数据
      recommendArr: [], // 存储首页推荐数据
      // 存储首页tab切换数据
      homeGoods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      curTab: 'pop' // 当前被选中的tab类型
    }
  },
  components: {
    HomeNavBar,
    PullRefresh,
    HomeSwipe,
    HomeRecommend,
    HomePopular,
    HomeTab
  },
  computed: {
    activeGoods () {
      return this.homeGoods[this.curTab].list
    }
  },
  created () {
    this.getHomeMultidata() // 请求首页数据
    this.getHomeTypePage('pop')
    this.getHomeTypePage('new')
    this.getHomeTypePage('sell')
  },
  methods: {
    getHomeMultidata () {
      getHomeMultidata().then(res => {
        const { data: { banner, recommend }, success } = res
        if (success) {
          this.bannerArr = banner.list
          this.recommendArr = recommend.list
        }
      })
    },
    getHomeTypePage (type) {
      const page = this.homeGoods[type].page + 1
      getHomeTabsData(type, page).then(res => {
        const { data: { list }, success } = res
        if (success) {
          this.homeGoods[type].list.push(...list)
          this.homeGoods[type].page += 1
        }
      })
    },
    // 切换tab栏
    handleTabClick (index) {
      switch (index) {
        case 0:
          this.curTab = 'pop'
          break
        case 1:
          this.curTab = 'new'
          break
        case 2:
          this.curTab = 'sell'
          break
      }
    }
  }
}
</script>

<style lang="less" scoped>
  #home {
    position: relative;
    width: 100vw;
    height: 100vh;
    .home-nav-bar {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      z-index: 999;
    }
    .pull-refresh {
      position: absolute;
      left: 0;
      right: 0;
      top: 44px;
      .banner {
        height: 195px;
        overflow: hidden;
      }
      /deep/ .home-tab {
        .van-sticky--fixed {
          top: 44px;
          z-index: 999;
        }
        .van-tabs__wrap {
          border-top: 1px solid #eee;
        }
      }
    }
  }
</style>

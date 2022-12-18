<template>
  <div id="home">
    <home-nav-bar />
    <better-scroll class="scroll" :is-click="true" ref="scrollRef">
      <home-swipe class="banner" :banner-arr="bannerArr" />
      <home-recommend :recommend-arr="recommendArr" />
      <home-popular />
      <home-tab :tabs-arr="tabsArr" />
      <div style="height: 500px;"></div>
    </better-scroll>
  </div>
</template>

<script>
import HomeNavBar from './components/HomeNavBar'
import HomeSwipe from './components/HomeSwipe'
import HomeRecommend from './components/HomeRecommend'
import HomePopular from './components/HomePopular'
import HomeTab from './components/HomeTab'

import BetterScroll from 'components/common/BetterScroll/BetterScroll'

import { getHomeMultidata } from 'https/home'

export default {
  name: 'Home',
  data () {
    return {
      bannerArr: [], // 存储首页轮播图数据
      recommendArr: [], // 存储首页推荐数据
      // 存储首页tab切换数据
      tabsArr: [
        {
          title: '流行',
          pop: 'pop',
          page: 0
        },
        {
          title: '新款',
          pop: 'new',
          page: 0
        },
        {
          title: '精品',
          pop: 'sell',
          page: 0
        }
      ]
    }
  },
  components: {
    HomeNavBar,
    BetterScroll,
    HomeSwipe,
    HomeRecommend,
    HomePopular,
    HomeTab
  },
  created () {
    this.getHomeMultidata() // 请求首页数据
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
    }
  }
}
</script>

<style lang="less" scoped>
  #home {
    width: 100vw;
    height: 100vh;
    .scroll {
      height: calc(100% - 44px - 49px);
      .banner {
        height: 195px;
        overflow: hidden;
      }
    }
  }
</style>

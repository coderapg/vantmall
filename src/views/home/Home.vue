<template>
  <div id="home">
    <home-nav-bar />
    <better-scroll class="scroll" ref="scrollRef">
      <home-swipe class="banner" :banner-arr="bannerArr" />
      <home-recommend :recommend-arr="recommendArr" />
    </better-scroll>
  </div>
</template>

<script>
import HomeNavBar from './components/HomeNavBar'
import HomeSwipe from './components/HomeSwipe'
import HomeRecommend from './components/HomeRecommend'

import BetterScroll from 'components/common/BetterScroll/BetterScroll'

import { getHomeMultidata } from 'https/home'

export default {
  name: 'Home',
  data () {
    return {
      bannerArr: [], // 存储首页轮播图数据
      recommendArr: []
    }
  },
  components: {
    HomeNavBar,
    BetterScroll,
    HomeSwipe,
    HomeRecommend
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
        height: 214px;
        overflow: hidden;
      }
    }
  }
</style>

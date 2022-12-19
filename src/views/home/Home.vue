<template>
  <div id="home">
    <home-nav-bar />
    <home-tab :tabs-arr="['流行', '新款', '推荐']" @handleTabClick="handleTabClick" :active-goods="activeGoods" v-show="false" />
    <better-scroll class="scroll" :is-click="true" ref="scrollRef" :probe-type="3">
      <home-swipe class="banner" :banner-arr="bannerArr" />
      <home-recommend :recommend-arr="recommendArr" />
      <home-popular />
      <home-tab :tabs-arr="['流行', '新款', '推荐']" @handleTabClick="handleTabClick" :active-goods="activeGoods" />
      <div style="height: 1000px;"></div>
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

import { getHomeMultidata, getHomeTabsData } from 'https/home'

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
    BetterScroll,
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

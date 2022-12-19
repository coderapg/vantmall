<template>
  <div id="home">
    <home-nav-bar class="home-nav-bar" />
    <pull-refresh class="pull-refresh">
      <home-swipe class="banner" :banner-arr="bannerArr" />
      <home-recommend :recommend-arr="recommendArr" />
      <home-popular />
      <home-tab class="home-tab" :tabs-arr="['流行', '新款', '推荐']" :offsetTop="40" @handleTabClick="handleTabClick" :active-goods="activeGoods" ref="homeTab" />
    </pull-refresh>
    <!-- <van-pull-refresh class="pull-content" v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad">
        <home-tab :tabs-arr="['流行', '新款', '推荐']" @handleTabClick="handleTabClick" :active-goods="activeGoods" ref="homeTab" />
      </van-list>
    </van-pull-refresh> -->
  </div>
</template>

<script>
import HomeNavBar from './components/HomeNavBar'
import HomeSwipe from './components/HomeSwipe'
import HomeRecommend from './components/HomeRecommend'
import HomePopular from './components/HomePopular'
import HomeTab from './components/HomeTab'

import PullRefresh from 'components/common/PullRefresh/PullRefresh'

import { getHomeMultidata, getHomeTabsData } from 'https/home'

export default {
  name: 'Home',
  data () {
    return {
      loading: false,
      finished: false,
      refreshing: false,
      bannerArr: [], // 存储首页轮播图数据
      recommendArr: [], // 存储首页推荐数据
      // 存储首页tab切换数据
      homeGoods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      curTab: 'pop', // 当前被选中的tab类型
      showTab: false, // 是否显示顶部的吸顶的tab栏
      tabOffsetTop: 0 // tab栏距离顶部的位置
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
    onLoad () {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = []
          this.refreshing = false
        }
        for (let i = 0; i < 10; i++) {
        }
        this.loading = false
      }, 1000)
    },
    onRefresh () {
      // 清空列表数据
      this.finished = false
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true
      this.onLoad()
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
    },
    betterScrollScroll (position) {
      console.log('发出事件', Math.abs(position), this.tabOffsetTop)
      this.showTab = Math.abs(position) > (this.tabOffsetTop - 44)
    }
    // handleBannerLoad () {
    //   this.tabOffsetTop = this.$refs.homeTab.$el.offsetTop
    //   console.log('发射过来', this.$refs.homeTab.$el.offsetTop)
    // }
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

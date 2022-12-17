<template>
  <div id="home">
    <home-nav-bar />
  </div>
</template>

<script>
import HomeNavBar from './components/HomeNavBar'

import { getHomeMultidata } from 'https/home'

export default {
  name: 'Home',
  components: {
    HomeNavBar
  },
  created () {
    this.getHomeMultidata() // 请求首页数据
  },
  methods: {
    getHomeMultidata () {
      getHomeMultidata().then(res => {
        console.log('===', res)
      })
    }
  }
}
</script>

<style lang="less" scoped>
  #home {}
</style>

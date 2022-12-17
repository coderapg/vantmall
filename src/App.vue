<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <tab-bar @handleTabBarItemClick="handleTabBarItemClick" />
  </div>
</template>

<script>
import TabBar from 'components/content/TabBar/TabBar'

export default {
  name: 'App',
  data () {
    return {
      tabCur: 0
    }
  },
  components: {
    TabBar
  },
  methods: {
    handleTabBarItemClick (event) {
      this.tabCur = event
      console.log('tabbarCur', event, this.tabCur)
    }
  }
}
</script>

<style lang="less">
  // @import url('./assets/fonts/iconfont.css');
  @import url('./assets/css/normalize.css');
</style>
